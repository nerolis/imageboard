import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

const dbUrl = 'mongodb://localhost/board';

// Валидация создания треда. 
function validate(data) {
  let errors = {};
  if (data.name === '') errors.name = "Can't be empty";
  if (data.text === '') errors.text = "Can't be empty";
  const isValid = Object.keys(errors).length === 0
  return { errors, isValid };
}

mongodb.MongoClient.connect(dbUrl, function(err, db) {

  app.get('/api/threads', (req, res) => {
    db.collection('threads').find({}).toArray((err, threads) => {
      res.json({ threads });
    });
  });
// todo: добавить айди
  app.post('/api/threads', (req, res) => {
    const { errors, isValid } = validate(req.body);
    if (isValid) {  
      const { id, date, title, name, text, image} = req.body;
      db.collection('threads').insert({id, title, name, text, image, date:new Date().toLocaleString()}, (err, result) => {
        if (err) {
          res.status(500).json({ errors: { global: "500" }});
        } else {
          res.json({ thread: result.ops[0] });
        }
      });
    } else {
      res.status(400).json({ errors });
    }
  });
  
  
  // app.delete('/api/threads', (req, res => {
  //  db.collection('threads').deleteOne({_id)
  // }))

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "404"
      }
    });
  })

  app.listen(3000, () => console.log('Server is running on localhost:3000'));

});

