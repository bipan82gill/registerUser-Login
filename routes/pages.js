const express= require('express');
const router =express.Router();
//get route for index page
router.get('/',(req,res,next)=>{
    res.render('index',{title:"My application"});
});
//get route for home page
router.get('/home',(req,res,next)=>{
    res.send("this is home page");
});
// post route for login data
router.post('/login', (req,res,next)=>{
    user.login(req.body.username, req.body.password, function(result){
        if(result){
            res.send('Logged in as :' + result.username);
        }else{
            res.send('Username/Password is incorrect !');
        }
    })
});
//post route for register data
router.post('/register', (req,res,next)=>{
    res.json(req.body);
})

module.exports = router;