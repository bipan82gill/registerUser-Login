const express= require('express');
const router =express.Router();
const User = require('../core/user');


const user = new User();
//get route for index page
router.get('/',(req,res,next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home');
        return;
    }
    res.render('index',{title:"My application"});
});
//get route for home page
router.get('/home',(req,res,next)=>{
    let user = req.session.user;
    if(user){
        res.render('home',{opp:req.session.opp, name:user.fullname});
        return;
    }
    res.redirect('/');
});
// post route for login data
router.post('/login', (req,res,next)=>{
    user.login(req.body.username, req.body.password, function(result){
        if(result){
            req.session.user = result;
            req.session.opp = 1;

            res.redirect('/home');
        }else{
            res.send('Username/Password is incorrect !');
        }
    })
});
//post route for register data
router.post('/register', (req,res,next)=>{
    let userInput ={
       username: req.body.username,
       fullname: req.body.fullname,
       password: req.body.password
    };
    user.create(userInput, function(lastId){
        if(lastId){
            user.find(lastId, function(result) {
                req.session.user = result;
                req.session.opp = 0;
                res.redirect('/home');
        });
    }else {
            console.log('Error creating a new user ......');
        }
    })
})

router.get('/logout', (req, res, next) => {
    // Check if the session is exist
    if(req.session.user) {
        // destroy the session and redirect the user to the index page.
        req.session.destroy(function() {
            res.redirect('/');
        });
    }
});

module.exports = router;