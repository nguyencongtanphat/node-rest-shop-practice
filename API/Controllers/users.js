const saltRounds = 10;
const bcrypt = require('bcrypt');
const User = require('../model/User')
const jwt = require('jsonwebtoken');
const users = {
    handleSignUp: (req, res, next)=>{
        User.findOne({email: req.body.email})
            .then((user)=>{
                if(user){
                    res.json('email already use')
                }else{
                    bcrypt.hash(req.body.password, saltRounds)
                        .then(password =>{
                            const user = new User({
                                userName: req.body.userName,
                                password: password,
                                email: req.body.email,
                            })
                            user.save()
                                .then(result =>{
                                    res.status(200).json(result)
                                })
                                .catch(err =>{
                                    next(err);
                                })
                        })
                        .catch(err =>{
                            next(err);
                        })
                } 
            })  
    },
    handleLogin: (req, res, next)=>{
        User.findOne({email: req.body.email})
            .then(user =>{
                if(user){
                    bcrypt.compare(req.body.password, user.password)
                        .then(result=>{
                            if(result)
                            {
                               const token = jwt.sign(
                                {email: user.email, 
                                userName: user.userName},
                                process.env.PRIVATE_KEY, 
                                {expiresIn: '1h' })
    
                                res.status(200).json({
                                    message : 'login successfully',
                                    token: token
                                })
                            }
                            else{
                                res.status(404).json({message:'email or password is not valid'})
                            }
                        })
    
                }else{
                    res.status(404).json({message:'email or password is not valid'})
                }
            })
    },
    handleGetAllUsers: (req, res, next) =>{
        User.find({})
        .select('username email password')
        .then(users =>{
            res.status(200).json(users);
        })
        .catch(err =>{
            next(err)
        })
    },
    handleGetUserDetail:(req, res, next) =>{
        User.findById(req.params.id)
        .select('username email password')
            .then(user =>{
                res.status(200).json(user);
            })
            .catch(err =>{
                next(err)
            })
    },
    handleDeleteUser:(req, res, next) =>{
        User.deleteOne({_id:req.params.id})
            .then(result =>{
                res.status(200).json(result);
            })
            .catch(err =>{
                next(err)
            })
    }
}

module.exports =users