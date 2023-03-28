const express = require('express');
const app = express();
const defiRoute = express.Router();
// Employee model
let Defi = require('./models/defi');
// Add Employee
defiRoute.route('/create').post((req, res, next) => {
    Defi.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All Employees
defiRoute.route('/').get((req, res) => {
    Defi.find((error, data) => {
    if (error) {
      return next(error+"z")
    } else {
      res.json(data)
    }
  })
})
// Get single employee
defiRoute.route('/read/:id').get((req, res) => {
    Defi.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee
defiRoute.route('/update/:id').put((req, res, next) => {
    Defi.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete employee
defiRoute.route('/delete/:id').delete((req, res, next) => {
    Defi.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = defiRoute;