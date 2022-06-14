const mongoose =require('mongoose')
  const { Schema } = mongoose;
  const User = new Schema({ 
        userName:{type: String, required: true},
        password:{type: String, required: true},
        email:{type: String, 
               required: true,
               unique: true,
               match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},
  })

  module.exports = mongoose.model('User ', User)