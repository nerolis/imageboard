  import express from 'express';
  import autoIncrement from 'mongodb-autoincrement';
  let router = express.Router();
  
  function validate(data) {
  let errors = {};
  if (data.name === '') errors.name = "Can't be empty";
  // if (data.text === '') errors.text = "Can't be empty";
  const isValid = Object.keys(errors).length === 0
  return { errors, isValid };
}

  router.get('/api/threads', (req, res) => {
    db.collection('threads').find({}).toArray((err, threads) => {
      res.json({ threads });
    });
  });

   router.get('/api/threads/:threadsId', (req, res) => {
    db.collection('threads').findOne({id: Number(req.params.threadsId)})
      .then(threads => res.send(threads))
        .catch(console.error)
    });

   router.get('/api/posts', (req, res) => {
    db.collection('posts').find({}).toArray((err, posts) => {
      res.json({ posts });
    });
  });

  router.post('/api/threads', (req, res) => {
    autoIncrement.getNextSequence(db, 'threads', function (err, autoIndex) {
    const { errors, isValid } = validate(req.body);
    if (isValid) {  
      const {id, date, title, name, text, image} = req.body;
      db.collection('threads').insert({id: autoIndex, title, name, text, image, date:new Date().toLocaleString()}, (err, result) => {
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
  
      router.post('/api/posts', (req, res) => {
      autoIncrement.getNextSequence(db, 'threads', function (err, autoIndex) {
    const { errors, isValid } = validate(req.body);
    if (isValid) {  
      const { id, date, title, name, text, image} = req.body;
      db.collection('posts').insert({id: autoIndex, title, name, text, image, date:new Date().toLocaleString()}, (err, result) => {
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

// router.post('/api/posts', (req, res) => {
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

export default router;