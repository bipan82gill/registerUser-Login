# Register User and Login Application
This application is deployed in Nodejs using Express and database MySql.This app is design to register and login user by saving  password into encrypted form by using hash password.

# Packages are Required 

-npm install 

-npm i express express-session bcrypt mysql pug  util-promisify.

-npm i nodemon -D(for development)

 # Start application 

 npm run start

 or 

 node app.js

 # Database

 For this application data is saved into database 'logindb'.It has users table.Users table has following table structure.

      id int AUTO_INCREMENT,
      username VARCHAR(20),
      fullname VARCHAR(20),
      password VARCHAR(128),
      PRIMARY KEY(id);
# Run database:
 For running this database we use workbench MySql. 

 # App structure:
core   
    pool.js
    user.js
db
    schema.sql
    seed.sql
public
    css
        style.css
    img
routes
    pages.js
views
    includes
        header.pug
        login-form.pug
        register-form.pug
        styles.pug
    home.pug
    index.pug
    layout.pug
app.js

# Application Links:
Github :  https://github.com/bipan82gill/registeruserlogin

# Application Demo
![Demo](./public/img/loginproject.gif)



