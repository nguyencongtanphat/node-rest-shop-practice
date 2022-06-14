const express = require('express');
const router = express.Router();
const user =  require('../Controllers/users')
const authen= require('../MiddleWare/checkAuthen')



//[POST] /users/signup
router.post('/signup', user.handleSignUp)

//[GET]/users/login
router.get('/login', user.handleLogin)

//[GET] /users
router.get('/', authen.authenCheck, user.handleGetAllUsers)

//[GET] /users/:id/
router.get('/:id',authen.authenCheck, user.handleGetUserDetail)

//[DELETE] /users/:id
router.delete('/:id',authen.authenCheck, user.handleDeleteUser)
module.exports = router;