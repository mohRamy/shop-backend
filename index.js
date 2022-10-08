// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routers/auth");

// INIT
const app = express();
const DB = 'mongodb+srv://mohammedramydaly:moha242mmed9336@cluster0.h2bdlvl.mongodb.net/?retryWrites=true&w=majority';

// middleware
app.use(express.json());
app.use(authRouter);

// Connections
mongoose
    .connect(DB)
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((e) => {
        console.log(e);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`connected at port ${PORT}`);
});

module.exports = app;

// https://git.heroku.com/floating-wildwood-23496.git (origin)


// const express = require("express");
// const app = express();
// const mongoose = require('mongoose');

// const DB = 'mongodb+srv://mohammedramydaly:moha242mmed9336@cluster0.h2bdlvl.mongodb.net/?retryWrites=true&w=majority';

// mongoose
//     .connect(DB)
//     .then(() => {
//         console.log("Connection Successful");
//     })
//     .catch((e) => {
//         console.log(e);
//     });


// app.get('/products', (req, res, next) => {
//     res.json({ 'name': 'comunter', 'color': 'black' })
// })

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log("it is working");
// })

// module.exports = app;