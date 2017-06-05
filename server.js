import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import path from 'path';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';
import autoIncrement from 'mongodb-autoincrement';
import morgan from 'morgan';
import bluebird from 'bluebird';
import authRoute from './server/routes/auth';
import config from './server/config';
import errorHandler from './server/middlewares/errorHandler'; // must be last
import checkToken from './server/middlewares/checkToken';
var cool = require('cool-ascii-faces');
mongoose.Promise = bluebird;
mongoose.connect(config.database, err => {
  if (err) {
    throw err
  }
  console.log('db connected')
})

const app = express();
app.set('port', (process.env.PORT || 3000));
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}))

const dbUrl = 'mongodb://nerolis:1583123f@ds161041.mlab.com:61041/yyychan';




function validate(data) {
  let errors = {};
  if (data.name === '') errors.name = "Can't be empty";
  if (data.text === '') errors.text = "Can't be empty";
  const isValid = Object.keys(errors).length === 0
  return { errors, isValid };
}

  mongodb.MongoClient.connect(dbUrl, function(err, db) {

  app.use('/api', authRoute);
  app.get('/test', checkToken, (req, res) => { // token
    res.json('test')
  });

  // todo: refactor через роутер
  app.get('/api/threads', (req, res) => {
    db.collection('threads').find({}).toArray((err, threads) => {
      res.json({ threads});
    });
  });

  app.get(['/', '/threads/:threadsId'], (req, res) => {
  serverRender(req.params.threadId)
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })


    .catch(error => {
      console.error(error);
      res.status(404).send('Bad Request');
    });
});

   app.get('/api/threads/:threadsId', (req, res) => {
    db.collection('threads').findOne({id: Number(req.params.threadsId)})
      .then(threads => res.send(threads))
        .catch(console.error)
    });

   app.get('/api/posts', (req, res) => {
    db.collection('posts').find({}).toArray((err, posts) => {
      res.json({ posts });
    });
  });

  app.post('/api/threads', (req, res) => {
    autoIncrement.getNextSequence(db, 'threads', function (err, autoIndex) {
    const { errors, isValid } = validate(req.body);
    if (isValid) {  
      const {id, date, title, name, text, image} = req.body;
      db.collection('threads').insert({id: autoIndex, title, name, text, image, videoId, date:new Date().toLocaleString(utc+3)}, (err, result) => {
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
  })
  
      app.post('/api/posts', (req, res) => {
      autoIncrement.getNextSequence(db, 'threads', function (err, autoIndex) {
    const { errors, isValid } = validate(req.body);
    if (isValid) {  
      const { id, date, title, name, text, image, reply_id} = req.body;
      db.collection('posts').insert({reply_id, id: autoIndex, title, name, text, image, videoId, date:new Date().toLocaleString(utc+3)}, (err, result) => {
        if (err) {
          res.status(500).json({ errors: { global: "500" }});
        } else {
          res.json({ post: result.ops[0] });
        }
      });
    } else {
      res.status(400).json({ errors });
    }
  });
    })

// app.post('/api/posts', (req, res) => {
//   const threadId = req.body.threadId;
//   const post = req.body.newPost;
//   db.collection('posts').insertOne({ post }).then(result => {
//     db.collection('threads').findAndModify(
//       {_id: threadId},
//       [],
//       {$push: {postIds: result.insertedId}},
//       { new: true}
//     ).then(doc => 
//       res.send({
//         updatedThread: doc.value,
//         newPost: {_id: result.insertedId, post}
//       })
//     )
//   })
//   .catch(console.error)
// })

app.get('*', function (req, res) {
  // and drop 'public' in the middle of here
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use(errorHandler);
  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "404"
      }
    });
  })


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

});