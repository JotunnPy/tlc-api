const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.get('/api/getUser', (req, res)=>{
    res.send([1,2])
})
const port = process.env.PORT || 3000
app.listen(port, (err)=>{
    console.log(err)
})