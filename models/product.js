const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title:  
  {
      type:String,
      required:true
  },
    price:  
  {
      type:Number,
      required:true
  },
  quantity:  
  {
      type:String,
      required:true
  },
  description :
  {
      type:String,
      required:true
  },

  taxable:{
    type:Boolean,
    required:true

  }
});

const productModel =mongoose.model("productForm",productSchema);
module.exports=productModel;


