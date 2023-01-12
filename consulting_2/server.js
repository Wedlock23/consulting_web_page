
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000
// connect my sql database
const mysql = require("mysql2")

// gives the sql login to the server
const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"@blueBird25",
    connectionLimit:10,
    database: "newdatabase"
});
            // input the database name here
pool.query('select * from newdatabase.user', ( err, res)=>{
    return console.log(res)
});


// printing a single line from the database
pool.query('select * from user where id = 1', (err, rows)=>{

    if(err)throw console.error("error")

    // how to send values from database to ejs files
    // so that they auto update (not working rn)
    // if(!err){
    //     console.log(rows.length)
    //     res.render('index.ejs', {rows})
    // }
})

const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const usrs = []

//creates and authenticates password
const createPassport = require('./passportConfig')//because it is exporting as initalized
createPassport(
    passport,
    email => usrs.find(user => user.email === email),
    id => usrs.find(user => user.id === id)
)//initalized fucntion that is intialize(passport, getUserByEmail, getUserById)

//looks for the ejs file in the view folder
app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))
//to send warnings that the passowrd is incorrect
app.use(flash())
//used to save information on the server
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitalized: false
}))
//calls the function from the passportConfig.js
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

//used to check the name with is visible to the user
// app.get('/', checkAuthenticated, (req, res) => {
//     // pool.query('select * from user where id = 1', (err, rows)=>{
//     //     if(err)throw console.error("error")

//     //     if(!err){
//     //         console.log(rows.length)
//     //         // for (i = 0;i<rows.length;++i){
//     //         //     if(rows[0].email == usr[0])
//     //         //}
//     //         // made it home directory, and sent it rows
//     //         res.render('index.ejs', {rows})
//     //     }
//     // })
//     res.render('index.ejs', { name: req.user.name })
// })

//used to check the name with is visible to the user
app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name })
})


app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
})

//1. accesses the css and the js files in the public folder
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/CSS'))
app.use('/js', express.static(__dirname + 'public/JS'))

//uses post to login and send to the index.js
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

//renders out the register.ejs if not authenticated
app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
})
//uses post to store private secure data such as passwords
app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 8)
        usrs.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch{
        res.redirect('/register')
    }
    console.log(usrs)
})
//logs usr out
//add link to logout page here -- make sure logout function is working
app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})



//attempt to redirect to actual logout page
/* app.post('/logout', function(req, res, next) {
    req.logout(function(err); {
        if (err) { return next (err); }
        res.redirect('/')
    });
}); */

//function for veryifing
function checkAuthenticated (req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

//function checks authentication and redirects to index.ejs
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}


//listens on port 3000 we created for our local host
app.listen(port, () => console.log('Prof Murrell example hosted on port: ' + port ))
// found solution on stack overflow to add + between ' '

// in order to use pictures locally
app.use( express.static( "public" ) );