const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

exports.signup = (req, res, next) => {
    //hashing password
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save().then(
                () =>{
                    return res.status(200).json({
                        message: 'Single User created for admin access'
                    });
                }
            );
        }
    );
}