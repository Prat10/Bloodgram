const express = require('express')
// const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const cors = require('cors');

//origin and methods
router.use(
    cors({
        origin: "http://localhost:3000",
        methods: "POST",
    })
)
require('../db/conn');
const User = require('../Models/userSchema');
router.post('/register', async (req, res) => {
    const { name, email , phone, password , Blood, gender, age , weight, smsAlert, zipcode, state , district } = req.body;
    if (!name || !email || !phone || !password || !Blood || !gender || !age || !weight || !smsAlert || !zipcode || !state || !district) {
        return res.status(422).json({ error: "Something is missing" });
    }
    try {
        //Here we check the given email is exist or not already
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Already Registered" });
        }

        const user = new User({ name, email, phone, password, Blood, gender, age, weight, smsAlert, zipcode, state, district });
        const userRegister = await user.save();
        if (userRegister) {
            res.status(201).json({ message: "user Successfully Registered" });
            res.send(userRegister);
        }
        else {
            res.status(500).json({ error: "failed register" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
//No empty fields
//Email must be Registered already(invalid Credentials)
//Password must be match
// Signin section
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(req.body)
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" });
        }
        const UserLogin = await User.findOne({ email: email });
        // const PassWordcheck = await User.findOne({ password: password });
        //Here We check Whether the User has Correct Email or not
        // console.log(UserLogin);

        if (UserLogin) {
            const isMatch = await bcrypt.compare(password, UserLogin.password);
            // console.log(isMatch);
            //Use for matching the PassWord 
            // if (!isMatch) {
            //     res.json({ error: "Invalid Credentials" });
            // }
            // else {
            //     res.json({ message: "User Signin Successfully" });
            // }
            if (isMatch) {
                res.json({ message: "User signin Successfully" });
            }
            //when the email or password does not match 
            else {
                res.status(400).json({ message: "fail to login" });
            }
        }
        //Error while the Email not Matches
        else {
            res.status(400).json({ error: "Invalid Credentials" });
        }
    }
    //It Shows the Error while the Server Runs
    catch (error) {
        console.log(error);
    }
});
//fetching the data from the mongodb in api
router.get('/getdetails',async(req, res) => {
    //  res.json({name:"hello"});
     const myData=await User.find();
     res.status(200).json({ myData });
    // res.send(myData);
});

// router.post('/deletedoc', async (req, res) => {
//     const { name = "buchuva" } = req.body;
//     const Userdelete = await User.deleteOne({ name: name });
//     res.json({ message: "Deleted Successfully", data: Userdelete });
// })

module.exports = router;