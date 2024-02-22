const express = require('express')
const router = express.Router()

const credential = {
    email: 'admin@khan.com',
    password: 'mannan'
}
// login user
router.post('/login', (req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email
        res.redirect('/route/dashboard')
    }
    else{
        res.end('Invalid Username or Password')
    }
})

// route for dashboard
router.get('/dashboard', (req, res) => {
    if(req.session.user){
        res.render('dashboard', {user: req.session.user})
    }
    else{
        res.send('Unauthorized User')
    }
})

module.exports = router