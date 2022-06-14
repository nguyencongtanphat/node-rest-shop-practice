const Product = require('../model/Product')

//[POST]  products/
exports.productCreate = (req, res, next)=>{
    console.log('body:', req.body )
    console.log('file:', req.file )
    
    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        productImage: req.file.path
    })
    product.save()
        .then(result=>{
            res.status(200).json({result})
        })
        .catch(err=>{
           res.status(500)
           next(err)
        })
}
//[GET]/products
exports.productsGetAll = (req, res, next)=>{
   Product.find({})
    .then(products =>{
        res.json({products})
    })
    .catch(err=>{
        res.status(500)
        next(err);
    })
}

//[GET]/products/:id
exports.productsGetDetail = (req, res, next)=>{
   Product.findOne({_id:req.params.id})
        .then(products =>{
            res.status(200).json({products})
        })
        .catch(err=>{
            res.status(500)
            next(err)
         })
}

//[PATCH]/products/:id
exports.productUpdate = (req, res, next)=>{
    const updateOps={}
    
    req.body.forEach(ops =>{
        updateOps[ops.proName] = ops.value
    })
    Product.updateOne({_id: req.params.id}, updateOps)
        .then(result =>{
            res.status(200).json({result})
        })
        .catch(err=>{
            res.status(500)
            next(err)
         })
}

//[DELETE]/products/:id
exports.productDelete = (req, res, next)=>{
    Product.remove({_id: req.params.id})
        .then((result) => res.status(200).json({result}))
        .catch(err=>{
            res.status(500)
            next(err)
         })
}