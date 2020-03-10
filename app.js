const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.set('views', path.join,'views');
app.set('view engine', 'pug');

app.listen(3000,()=>{
    console.log("localhost:3000");
});
module.exports= app;