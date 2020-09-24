const path=require('path');
const http=require('http');
const fs=require('fs');

const express= require('express');
const app= express();

app.use(express.static(path.join(__dirname,"public")))

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});