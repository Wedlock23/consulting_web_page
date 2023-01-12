const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email)
    if (user == null) {
        return document(null, false, { message: 'no user registered with that email'}) //check if email
    }

    try {
        if (await bcrypt.compare(password, user.password)) {
            return done(null, user) //returns the user of auth
        }else {
            return done(null, false, { message: 'This is not the correct password'})
        }
    } catch (e) {
        return done(e)
    }
}

passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) => {
    return done(null, getUserById(id))
    })
}   
module.exports = initialize