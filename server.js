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
import authenticate from './server/middlewares/authenticate';
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
  
  
  
  // threads
  // todo: refactor через роутер
  app.get('/api/threads', (req, res) => {
    db.collection('threads').find({}).toArray((err, threads) => {
      res.json({ threads});
    });
  });

   app.get('/api/threads/:threadsId', (req, res) => {
    db.collection('threads').findOne({id: Number(req.params.threadsId)})
      .then(threads => res.send(threads))
        .catch(console.error)
    });

    app.put('/api/threads/:threadsId', (req, res) => {
      db.collection('threads').findOneAndUpdate({id: Number(req.params.threadsId)}, {$inc: {like: +1}})
        .then(threads => res.send(threads))
          .catch(console.error)
      }); 
        app.delete('/api/threads/:threadsId', authenticate, (req, res) => {
          db.collection('threads').deleteOne({id: Number(req.params.threadsId)})
          if (err) {res.status(500).json({errors: {global: err}});return;}
        res.json({})
    })

    app.post('/api/threads', (req, res) => {
    autoIncrement.getNextSequence(db, 'threads', function (err, autoIndex) {
    const { errors, isValid } = validate(req.body);
    if (isValid) {  
      const {id, date, title, name, text, image, YoutubeLink, like} = req.body;
      db.collection('threads').insert({id: autoIndex, title, name, text, image, YoutubeLink, like, date:new Date().toLocaleString()}, (err, result) => {
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

  
      // posts 
    app.put('/api/posts/:postsId', (req, res) => {
      db.collection('posts').findOneAndUpdate({id: Number(req.params.postsId)}, {$inc: {like: +1}})
        .then(posts => res.send(posts))
          .catch(console.error)
      });
   app.get('/api/posts', (req, res) => {
    db.collection('posts').find({}).toArray((err, posts) => {
      res.json({ posts });
    });
  });
     app.delete('/api/posts/:postsId', authenticate, (req, res) => {
          db.collection('posts').deleteOne({id: Number(req.params.postsId)})
            if (err) {res.status(500).json({errors: {global: err}});return;}
        res.json({})
    })
      app.post('/api/posts', (req, res) => {
      autoIncrement.getNextSequence(db, 'threads', function (err, autoIndex) {
    const { errors, isValid } = validate(req.body);
    if (isValid) {  
      const { id, date, title, name, text, image, reply_id, YoutubeLink, like} = req.body;
      db.collection('posts').insert({reply_id, id: autoIndex, title, name, text, image, like, YoutubeLink, date:new Date().toLocaleString()}, (err, result) => {
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
