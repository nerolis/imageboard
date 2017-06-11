import jwt from 'jsonwebtoken';
import config from '../config';

export default async (req, res, next) => {
    const token = req.headers['authorization']; // take token

    // check token
    if (!token) {
        return res
        .status(403)
        .json({message: 'forbidden. no token'})
    }
    try {
        var tokenObj = jwt.verify(token, config.secret);
    } catch ({ message }) {
        return res
        .status(400)
        .json({message})
    }
    next()
}

