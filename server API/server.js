const express = require('express');
const bodyParser =require( 'body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const users =  require('./models/users')
const app = express();
const PORT =process.env.PORT||4000;
const db = 'mongodb://localhost:27017/MyData';
mongoose.connect(db, { useNewUrlParser: true });
app.use(cors());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(users);

// app.use(function(req,res,next){
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, content-type, Accept");
//     next();
// });
// app.use('/', router);

app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));