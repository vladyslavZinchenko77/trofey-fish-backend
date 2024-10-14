const express = require('express');

const app = express()

app.use(express.json())

let posts = [
  {
    id: 1,
    fishingType: 'Спиннинг',
    fishermanName: 'Иван Петров',
    fishType: 'Щука',
    fishPhoto: 'http://example.com/photo1.jpg',
    location: 'Река Днепр',
    dateCaught: '2024-10-01',
    bait: 'Воблер',
    feed: 'Прикормка для щуки',
    likes: 0,           
    likedBy: []          
  },
  {
    id: 2,
    fishingType: 'Удочка',
    fishermanName: 'Сергей Иванов',
    fishType: 'Карп',
    fishPhoto: 'http://example.com/photo2.jpg',
    location: 'Река Днепр',
    dateCaught: '2024-09-28',
    bait: 'Кукуруза',
    feed: 'Прикормка для карпа',
    likes: 0,
    likedBy: []
  }
];



  app.get('api/posts',(req,res)=>{
    res.send(posts)
  })


  const PORT = 4000

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })