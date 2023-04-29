const express = require('express')
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
    const { name = "name", email = "email", phone = "phone", password = "password", Blood = "Blood", gender = "gender", age = "age", weight = "weight", smsAlert = "smsAlert", zipcode = "zipcode", state = "state", district = "district" } = req.body;
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

// Sign IN section
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" });
        }
        const UserLogin = await User.findOne({ email: email });
        //Here We check Whether the User has Correct Email or not
        if (UserLogin) {
            const isMatch = await bcrypt.compare(password, UserLogin.password);
            //Use for matching the PassWord 
            if (!isMatch) {
                res.json({ error: "Invalid Credentials" });
            }
            else {
                res.json({ message: "User Signin Successfully" });
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
})

module.exports = router;