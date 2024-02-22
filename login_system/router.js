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
        // res.redirect('/dashboard')
        res.end('login successfull')
    }
    else{
        res.end('Invalid Username or Password')
    }
})

module.exports = router