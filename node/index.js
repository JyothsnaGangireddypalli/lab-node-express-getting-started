var http=require('http');
http.createServer((req,res)=>{
    res.write("this is http server");
    res.end();
}).listen(7000,()=>console.log("running on port 7000 "));

//setup express

const express=require('express')
const app=express()
app.get('/home',function(req,res){
    res.send('welcome page')
})
app.listen(7000,()=>console.log("server running on 7000"));