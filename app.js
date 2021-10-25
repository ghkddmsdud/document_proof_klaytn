const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const apiRouter = require('./router/route')
const app = express()

// c://apps/document/views
app.set('views',path.resolve(__dirname, '/views' ) )
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

// 미들웨어 등록
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(apiRouter)

var port = 8080
app.listen(port , function(){
    console.log(`Server is running at http://localhost:${port}`)
})