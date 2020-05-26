const express = require('express');
const app = express()
const port = 1234 || process.env.PORT
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');

const loginRoute = require('./routes/loginRoute')
const registerRoute = require('./routes/registerRoute')
const todosRoute = require('./routes/todosRoute')

app.use(cors());
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  mongoose.connect("mongodb+srv://user1:user1123@cluster0-vj5xi.mongodb.net/ToDoApp?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true } ,
    ()=>{
    console.log('connected to database');
})


app.use(express.static('client/build'));

  // For Routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use Routes
app.use('/register',registerRoute);
app.use('/login',loginRoute);
app.use('/todos',todosRoute);

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'client','build','index.html'));
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})