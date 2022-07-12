// This is how the server code looks with out using controllers
//bringing packages in
const express = require('express')
const cors = require('cors')
const {getAllMovies,createMovie} = require('./controller')

//initialising new app with express
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//get endpoint to get all movies
app.get('/api/movies',getAllMovies)

//post endpoint to create a new movie
app.post('/api/movies', createMovie)

const SERVER_PORT = 4004
app.listen(SERVER_PORT,() => console.log(`server runnin on ${SERVER_PORT}`))


    //creating new server
//bringing our packages in

const express = require('express')

//bring cors
const cors = require('cors')
// temp database
const movies = require('./db.json')

// creating new instance of express application
//initializing  new app with express
const app = express()

// get the middleware

app.use(express.json())
app.use(cors())

// creating an end point so that we can listen to the request at back end
//get endpoint to get all movies
app.get('/api/movies',(req,res)=>{
 res.status(200).send(movies)
})

let globalId = 11
// This is how the server code looks with out using controllers
//post endpoint to create a new movie
app.post('/api/movies',(req,res) =>
{
    const {title,rating,imageURL} = req.body
    let newMovie = {
        id:globalId,
        title :  title ,// or you can just say title when id matches key
        rating,
        imageURL
    }
    movies.push(newMovie)
    res.status(200).send(movies)
    globalId++
    
})

//when you create a new controller.js file to keep the code clean, post function looks like this
//app.post('/api/movies', createMovie)

//server port
const SERVER_PORT = 4004
app.listen(SERVER_PORT,() => console.log('server running on ${SERVER_PORT') )


    //creating new server
//bringing our packages in

const express = require('express')

//bring cors
const cors = require('cors')
// temp database
const movies = require('./db.json')

// creating new instance of express application
//initializing  new app with express
const app = express()

// get the middleware

app.use(express.json())
app.use(cors())

// creating an end point so that we can listen to the request at back end
//get endpoint to get all movies
app.get('/api/movies',(req,res)=>{
 res.status(200).send(movies)
})

let globalId = 11
//post endpoint to create a new movie
app.post('/api/movies',(req,res) =>
{
    const {title,rating,imageURL} = req.body
    let newMovie = {
        id:globalId,
        title :  title ,// or you can just say title when id matches key
        rating,
        imageURL
    }
    movies.push(newMovie)
    res.status(200).send(movies)
    globalId++
    }
})

//server port
const SERVER_PORT = 4004
app.listen(SERVER_PORT,() => console.log('server running on ${SERVER_PORT') )