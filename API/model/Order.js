const Product = require('./Product')
const mongoose =require('mongoose')
  const { Schema } = mongoose;
  const Order = new Schema({ 
        productId:{type: mongoose.Types.ObjectId, required: true, ref: 'Product'},
        quantity:{type: Number, default: 1},
  })

  module.exports = mongoose.model('Order', Order)