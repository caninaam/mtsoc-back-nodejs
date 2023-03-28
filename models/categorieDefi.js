const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let CategorieDefi = new Schema({
   id : {
    type:Number
   },
   
    name: {
      type: String
   }
}, {
   collection: 'CategoriesDefi'
})
module.exports = mongoose.model('CategorieDefi', CategorieDefi)