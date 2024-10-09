const express = require('express');

const app = express()

app.use(express.json())



let posts = [
    { id: 1, title: 'Fishing Tips', content: 'Learn how to catch more fish!' },
    { id: 2, title: 'Best Fishing Spots', content: 'Top locations for fishing.' }
  ];



  app.get('api/posts',(req,res)=>{
    res.send(posts)
  })


  const PORT = 4000

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })