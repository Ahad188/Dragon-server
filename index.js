const express = require('express');
const app = express();
const port = 5000;
const catagories = require('./Data/catagories.json')
const news = require('./Data/News.json');
const cors = require('cors')

app.use(cors());

app.get('/',(req,res)=>{
     res.send('Dragon Is Running')
});
app.get('/catagories',(req,res)=>{
     res.send(catagories)
});
app.get('/news',(req,res)=>{
     res.send(news)
});
app.get('/news/:id',(req,res)=>{
     const id = req.params.id
     const selectNews = news.find(n=> n._id === id)
     res.send(selectNews)
}),
app.get('/catagories/:id',(req,res)=>{
     const id = parseInt(req.params.id);
     if (id === 0) {
         res.send(news)
     }
     else {
         const categoryNews = news.filter(n => parseInt(n.category_id) === id);
         res.send(categoryNews)
     }
})

app.listen(port,()=>{
     console.log(`Dragon api running port is ${port}`)
})