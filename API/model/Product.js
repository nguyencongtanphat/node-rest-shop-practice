const mongoose =require('mongoose')
  const { Schema } = mongoose;
  const Product = new Schema({ 
        name:{type: String, required: true},
        price:{type: Number, required: true},
        productImage:{type: String, required: true},
  })

  module.exports = mongoose.model('Product', Product)