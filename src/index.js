const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const multer = require("multer")
const { default: mongoose } = require('mongoose');
const app = express();
const { AppConfig } = require('aws-sdk')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())


mongoose.connect("mongodb+srv://PawarMukesh:H0kj9rXiW8VOQJA2@cluster0.zxv7wgr.mongodb.net/group12Database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});