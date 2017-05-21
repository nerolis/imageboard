import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
// Заготовочка для регистрации


let router = express.Router();

function validateInput(data) {
    let errors = {};

    if (Validator.isNull(data.email)) {
        errors.email = 'This field is required';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    return  {
        errors, 
        isValid: isEmpty(errors)
    }
}

router.post('/', (request, response) => {
    const {errors, isValid} = validateInput(request.body);

    if (!isValid) {
        response.status(400).json(errors);
    }
});

export default router;