const route = require('express').Router()


//http://localhost:8080/hello , get방식으로 요청이 들어올때 "Hello world!!"을 response하는 기능
route.get('/hello', function(request , response){
    return response.send("Helo World!!")
})

module.exports = route;