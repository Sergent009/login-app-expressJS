const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

// load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))

// home route
app.get('/', (req, res) => {
    res.render('../login_system/views/base', {
        title: "Login System"
    })
})

app.listen(port, () => {
    console.log(`app is listening on the port http://localhotst:${port}`)
})