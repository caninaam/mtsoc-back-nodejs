const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Defi = new Schema({
   name: {
      type: String
   },
   description: {
      type: String
   },
   dateAjout: {
      type: Date
   },
   idCategorie: {
      type: Number
   }
}, {
   collection: 'defis'
})
module.exports = mongoose.model('Defi', Defi)