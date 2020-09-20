const databaseSettings = require('./knexfile.js').development
const knex = require('knex')(databaseSettings)
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')

// async function logCars(){
//     let cars = await knex('cars').select()
//     console.log(cars)
// }
// logCars()


app.use(bodyParser.json())
app.use(cors())


app.get('/cars', (request, response) => {
    async function logCars(){
        let cars = await knex('cars').select()
        response.json(cars)
    }
    logCars()
})

// users

// user signup

app.post('/users',(req,res) => {
    async function postUser(){
        let createdUser = await knex('users')
          .where({username: req.body.username})
          .select()
        if (createdUser.length > 0) {
            return res.json({error: true, message: "Username already taken"})
        }
        let user = await knex('users').insert(req.body)
        let newUser = user[0]
        token = await jwt.sign(
            {...req.body, id:newUser},
            "luxury car wishlist app"
        )
        return res.json({user: {...req.body, id: newUser}, token: token})
    }
    postUser()
})

// user login

app.post('/user/login', (req,res) => {
    async function getUser(){
      let userArray = await knex('users')
      .where({username: req.body.username})
      .select()
      console.log(userArray)
      if (userArray[0] !== undefined){
        if (userArray[0].password === req.body.password) {
          let user = userArray[0]
          token = await jwt.sign(
            { user },
            "luxury car wishlist app"
          )
          return res.json({ user: user, token: token})
        }
      }
      return res.json({
        error: true,
        message:"Username/password combination invalid."
      })
    }
    getUser()
})

function verifyToken(req,res,next) {
    const [method, token] = req.headers.authorization.split(" ")
    if (method !== undefined) {
       req.token = token
       next()
    }
}

app.get('/user', verifyToken, (req,res) => {
  jwt.verify(
    req.token,
    "luxury car wishlist app",
    (error, authData) => {
      if (error) {
          res.send("No logged in user")
      } else {
        res.json(authData)
      }
    }
  )
})
    







app.listen(3001)
