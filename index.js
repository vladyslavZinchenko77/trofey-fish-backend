const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');




const app = express()
app.use(cors());
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

let posts = [
  {
    id: 1,
    fishingType: 'Спиннинг',
    fishermanName: 'Артем Бородай',
    fishType: 'Щука',
    fishPhoto: 'http://localhost:4000/uploads/boroday.jpg',
    location: 'Река Днепр',
    dateCaught: '2024-10-01',
    bait: 'Селект - Хастлер 160',
    feed: 'Прикормка для щуки',
    likes: 0,
    description: "щука весом 2,5 кг, использовал тесто как наживку.",
    fishWeight: 2.5           
           
  },
  {
    id: 2,
    fishingType: 'фідер',
    fishermanName: 'Віктор вацко',
    fishType: 'Карп',
    fishPhoto: 'http://localhost:4000/uploads/vatsko.jpg',
    location: 'Река Днепр',
    dateCaught: '2024-09-28',
    bait: 'Кукуруза',
    feed: 'Прикормка для карпа',
    likes: 0,
    description: "Карп весом 4 кг, использовал тесто как наживку.",
    fishWeight: 24.4
   
  },
  {
    id: 3,
    fishingType: 'фідер',
    fishermanName: 'Денис  Татарінов',
    fishType: 'Осетр',
    fishPhoto: 'http://localhost:4000/uploads/tarik.jpg',
    location: 'Река Днепр',
    dateCaught: '2024-09-28',
    bait: 'Кукуруза',
    feed: 'Прикормка для карпа',
    likes: 0,
    description: "Карп весом 4 кг, использовал тесто как наживку.",
    fishWeight: 8
   
  },
  {
    id: 4,
    fishingType: 'фідер',
    fishermanName: 'Антон  Міхалич',
    fishType: 'Карп',
    fishPhoto: 'http://localhost:4000/uploads/mihalych.jpg',
    location: 'Река Днепр',
    dateCaught: '2024-09-28',
    bait: 'Кукуруза',
    feed: 'Прикормка для карпа',
    likes: 0,
    description: "Карп весом 4 кг, использовал тесто как наживку.",
    fishWeight: 14
  }

];



  app.get('/api/posts',(req,res)=>{
    res.send(posts)
  })


  const PORT = 4000

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })


  app.post('/api/upload', upload.single('photo'), (req, res) => {
    const file = req.file;
    const photoUrl = `http://localhost:4000/uploads/${file.filename}`;
    res.json({ photoUrl });
  });