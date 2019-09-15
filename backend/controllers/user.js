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
            ).then(
                (error) =>{
                  return res.status(400).json({
                      error
                  });  
                }
            );
        }
    );
}

exports.login = (req, res, next) =>{
    User.findOne({
        email: req.body.email
    }).then(
        (user) =>{
            //check user
            if(!user){
                return res.status(400).json({
                    message: 'User does not exits'
                });
            }
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if(!valid){
                        return res.status(400).json({
                            message: 'Incorrect password provided'
                        });
                    }
                    //sign the token
                    const token = jwt.sign(
                        {userId: user.id},
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h'}
                    )
                    return res.status(200).json({
                        userId: user._id,
                        token
                    });
                }
            ).catch(
                (error) =>{
                    return res.status(400).json({
                        error
                    });
                }   
            );
        }
    );
}