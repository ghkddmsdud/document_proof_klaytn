const express = require('express')

const app = express()


var port = 8080
app.listen(port , function(){
    console.log(`Server is running at http://localhost:${port}`)
})