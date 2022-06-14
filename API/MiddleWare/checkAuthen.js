const jwt = require('jsonwebtoken');

exports.authenCheck = (req, res, next) => { 
    try{
        console.log('authen')
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify( token, process.env.PRIVATE_KEY)
        req.userData=decoded
        next()
    }catch(error){
        console.log(error)
        res.status(404).json({
            message:'not login yet',
            loginLink:'locallhost:3000/users/login'
        })
    }
   
}
