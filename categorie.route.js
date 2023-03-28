const express = require('express');
const app = express();
const categorieRoute = express.Router();
// Employee categorie
let categorieDefi = require('./models/categorieDefi');
// Add Employee
categorieRoute.route('/create').post((req, res, next) => {
  categorieDefi.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All categories
categorieRoute.route('/').get((req, res) => {
  categorieDefi.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



module.exports = categorieRoute;