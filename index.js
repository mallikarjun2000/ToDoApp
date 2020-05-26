const express = require('express');
const app = express()
const port = process.env.PORT || 1234
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const loginRoute = require('./routes/loginRoute')
const registerRoute = require('./routes/registerRoute')
const todosRoute = require('./routes/todosRoute')

app.use(cors());
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true } ,
    ()=>{
    console.log('connected to database');
})


app.use(express.static(path.join(__dirname,'client','build')));

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