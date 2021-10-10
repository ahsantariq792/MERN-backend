const express=require('express');
const cors=require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app=express();
const port=process.env.PORT || 7781 ;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,  useUnifiedTopology: true ,useFindAndModify:false  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// const studentsRouter = require('./routers/students');
const paymentsRouter=require('./routers/payments')
const ordersRouter=require('./routers/orders')
const restaurantsRouter=require('./routers/restaurants')
const promosRouter=require('./routers/promos')
const usersRouter=require('./routers/users')


// app.use('/students',studentsRouter);
app.use('/payments',paymentsRouter);
app.use('/orders',ordersRouter);
app.use('/restaurants',restaurantsRouter);
app.use('/promos',promosRouter);
app.use('/users',usersRouter);


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})