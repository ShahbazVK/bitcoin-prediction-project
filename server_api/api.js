const express = require('express')
const app = express()
const dbfile = require('./conn')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))
// const postroute = require('./routes/post')

// app.use('/api', postroute)

app.get('/', (req, res) => {
    res.end('Helloworld With Node JS and Express JS')
})

router.get('/addnewpost', (req, res) => {

    const newpost = new PostModel({
        title: req.body.title,
        imageurl: req.body.imageurl,
        description: req.body.description,
        postid: req.body.postid
    })
    newpost.save(function (err) {
        if (!err) {
            res.send('New Post added successfully')
        }
        else {
            res.send(err)
        }
    })

})

app.listen(5000, function () {

    console.log('Node JS and Express Server Started successfully with Nodemon')

})