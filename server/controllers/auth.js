import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config';


export const signup = async (req, res, next) => {
  const credentials = req.body;
  let user;

  try {
    user = await User.create(credentials);
  } catch ({ message }) {
     return res.status(400).json({ errors: { form: 'Username/e-mail already exist'}}) // todo, сделать для емейла, логина. 
  }

  res.json(user);
}

export const signin = async (req, res, next) => {
  const { login, password } = req.body;

  const user = await User.findOne({ login });

  if (!user) {
    return res.status(401).json({ errors: { form: 'Username not found'}})
  }

  try {
    const result = await user.comparePasswords(password);
    } catch (e) {
        return res.status(401).json({ errors: { form: 'Wrong password'}})
  }

  const token = jwt.sign({ _id: user._id }, config.secret);
  res.json(token);
}