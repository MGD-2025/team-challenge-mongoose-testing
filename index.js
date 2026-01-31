require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/config.js');
const postRouter = require ('./routes/post.js');  
const PORT = process.env.PORT || 3002;

connectDB()

app.use(express.json());
app.use('/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});