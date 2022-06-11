const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

// App Uses
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'crudedatabase'
})

db.connect((err)=>{
    if(err){
        console.log(err)
    }
})

//API Functions

app.post('/api/post', (req, res) => {
    const title = req.body.title
    if(title === ""){
        return
    }
    const message = req.body.message
    if(message === ""){
        return
    }
    const password = req.body.password
    if(password != "liziansen"){
        return
    }
    console.log(req.body)
    const queryInsert = 'INSERT INTO posts (title, body) VALUES (?, ?)'
    db.query(queryInsert, [title, message], (err, result) => {
        if (err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
})

app.get('/api/get', (req, res) => {
    const queryGet = 'SELECT * FROM posts'
    db.query(queryGet, (err, result) => {
        res.send(result)
    })
})
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server is online at Port: ${port}`)
})