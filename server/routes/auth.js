import express from 'express';
import * as AuthController from '../controllers/auth';
import checkToken from '../middlewares/checkToken';
const router = express.Router();

router.post('/register', AuthController.signup);
router.put('/userUpdate/:login', checkToken, (req, res) => {
db.collection('users').findOneAndUpdate({login: String(req.params.login)}, {userName: '', userImage: ''})
  .then(user => res.send(user))
    .catch(console.error)
}); 
router.post('/auth', AuthController.signin);

export default router;  




// import config from '../config';
// import jwt from 'jsonwebtoken';

// let router = express.Router()

// router.post('/', (req, res) => {
//     const {username, password} = req.body;

//      }).fetch().then(user => {
//          if (user) {
//             if(bcrypt.compareSync(password, user.get('password_digest'))) {
//                 const token = jwt.sign({
//                     id: user.get('id'),
//                     username: user.get('username') // user
//                 }, config.jwtSecret);
//                 res.json({token})

//             } else {
//                res.status(481).json({errors: { form: 'invalid'}})
//             }

//          } else {
//              res.status(481).json({errors: { form: 'invalid'}})
//          }
//      })
// }); 