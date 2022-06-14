exports.homeController = (req, res, next)=>{
    res.send('get home')
}

exports.errorHandler = ( error, req, res, next)=>{
    //error.status( error.status || 500)
    res.json({ error : {
        message : error.message 
    } })
}