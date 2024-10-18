const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const posts = require('./models/postModel')




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