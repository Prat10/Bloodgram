const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(express.json());
//we get the link of route using below code
app.use(require('./router/auth'));

const middleware = (req, res, next) => {
    console.log('This is middleware');
    next();
}
app.get('/', (req, res) => {
    res.send("Hello world From server");
});
app.get('/about', middleware, (req, res) => {
    res.send("Hello world From about");
});

console.log('subscribing');
app.listen("3004", () => {
    console.log('app is listening in port 3004')
});