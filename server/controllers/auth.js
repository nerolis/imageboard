import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config';

export const signup = async (req, res, next) => {
    const credentials = req.body;
    let user;

    try {           // User.create(credentials(err, user) => {if(err) return next(err)})
        user = await User.create(credentials);
    } catch({ message}) {
      return next({
          status: 400,
          message
      })
    }

    res.json(user);
}

export const signin = async (req, res, next) => {
    const { login, password} = req.body // Достаем логин и пароль
    const user = await User.findOne({ login }); // find

    if (!user) {
      return next({
          status: 404,
          message: 'User not found'
      })
    }
    
    try {
        const result = await user.comparePasswords(password)  
    } catch(e) {
      return next({
          status: 400,
          message: 'Bad Credentials'
      })
    }
    // Если совпадают
    const token = jwt.sign({_id: user._id}, config.secret);
    res.json(token)
}
