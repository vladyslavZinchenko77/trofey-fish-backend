const express = require('express');
const cors = require('cors');



const app = express()
app.use(cors());

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
    description: "щука весом 2,5 кг, использовал тесто как наживку.",
    fishWeight: 2.5           
           
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
    description: "Карп весом 4 кг, использовал тесто как наживку.",
    fishWeight: 4
   
  }
];



  app.get('/api/posts',(req,res)=>{
    res.send(posts)
  })


  const PORT = 4000

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })