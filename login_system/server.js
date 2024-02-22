// adding all the modules
const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const session = require('express-session')
const {v4:uuidv4} = require('uuid')
const app = express()

// importing the router.js file 
const router = require('./router')

// specifying a port
const port = process.env.PORT || 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

//  This line sets the view engine for rendering dynamic content on the server side
app.set('view engine', 'ejs')

// load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: uuidv4(), //this function will generate a string and make this session completely secret
    resave: false,
    saveUninitialized: true
}))

app.use('/route', router)

// home route
app.get('/', (req, res) => {
    res.render('../login_system/views/base', {
        titl: "Login System"
    })
})

app.listen(port, () => {
    console.log(`app is listening on the port http://localhost:${port}`)
})