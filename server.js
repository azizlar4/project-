//1 express
const express=require('express')

//2 express instance
const app = express();

//5 req .env
require('dotenv').config();

//6 connect DB
const connectDB=require('./config/connectDB');
connectDB();

//7 middleware 
app.use(express.json())

//8 routing
app.use('/api/product',require('./routes/product'))
app.use('/api/user',require('./routes/user'))
app.use('/api/payment',require('./routes/payment'))
app.use('/api/cart',require('./routes/cart'))


//3 port
const PORT = process.env.PORT;

//4 create server

app.listen(PORT,(err)=>{err?console.error(`failed to connect to the server!! ${err}`):console.log(`server running on ${PORT}...`)})

