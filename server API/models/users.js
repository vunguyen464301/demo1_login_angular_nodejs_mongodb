const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = require('express').Router();
mongoose.set('useFindAndModify', false);

let users = new Schema({
   // _id: String,
    username:String,
    password:String
});

users = mongoose.model('users',users);

router.get('/users',(req, res)=>{
    users.find({})
        .exec((err,data)=>{
            if(err)
                console.log(err)
            else{
                res.setHeader("Access-Control-Allow-Origin: *")
                // res.json(data)
                res.status(200).json(tasks);
            }
    })
});

router.post('/users', (req, res) => {
    var user = new User({
        username: req.body.username,
        password: req.body.password,
    });
    user.save((err, task) => {
        if (err) res.status(400).send('err');
        else {
            //res.setHeader("Access-Control-Allow-Origin: *")
         
            res.status(200).json(task);
            
        }
    });

});

router.route('/users').post((req,res)=>{
    users.save(req.body);
})
// users.create(
//     {username:"anhvu1sdf",password:"1w234"}
//)
module.exports = router; 
