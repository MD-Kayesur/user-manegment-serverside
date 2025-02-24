const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000



app.use(cors())
app.use(express.json())
const users =[
    
    { id:1, name:"kayes", email : 'kayes@gmail.com',},
    { id:1, name:"moklas", email : 'moklas@gmail.com',},
    { id:1, name:"mufassir", email : 'mufassir@gmail.com',}
]



app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res) =>{
    console.log(req.body);

    const newUser = req.body
    newUser.id = users.length+1
    users.push(newUser)
    res.send(newUser)
    
})

app.get('/', (req, res) => {
    res.send(' our user manegment server is running')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })