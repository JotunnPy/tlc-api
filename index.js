const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.get('/api/getUser', (req, res)=>{
    res.send([1,2])
})