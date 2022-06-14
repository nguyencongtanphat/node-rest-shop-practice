const Order = require('../model/Order')

//[POST]  orders/
exports.orderCreate = (req, res, next)=>{
    console.log(req.body)
    const order = new Order({
       productId: req.body.productId,
       quantity: req.body.quantity,
    })
    order.save()
        .then(result=>{
            res.status(200).json({result})
        })
        .catch(err=>{
           res.status(500)
           next(err)
        })
}
//[GET]/orders
exports.ordersGetAll = (req, res, next)=>{
    Order.find({})
        .select('_id productId quantity')
        .populate('productId', 'name')
        .then(orders =>{
            res.json({orders})
        })
        .catch(err=>{
            res.status(500)
            next(err);
        })
}

//[GET]/orders/:id
exports.ordersGetDetail = (req, res, next)=>{
   Order.findOne({_id:req.params.id})
        .select('_id productId quantity')
        .populate('productId', 'name')
        .then(orders =>{
            res.status(200).json({orders})
        })
        .catch(err=>{
            res.status(500)
            next(err)
         })
}


//[DELETE]/orders/:id
exports.orderDelete = (req, res, next)=>{
    Order.remove({_id: req.params.id})
        .then((result) => res.status(200).json({result}))
        .catch(err=>{
            res.status(500)
            next(err)
         })
}