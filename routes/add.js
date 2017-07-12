// var router = require('express').Router();
// var Product = require('../models/product');
//
// router.get('/add-product', function(req, res, next){
//   res.render('admin/add-product',{ message: req.flash('success')});
// });
//
// router.post('/add-product', function(req, res, next) {
//   var product = new Product();
//   console.log(req.body);
//   product.name = req.body.name;
//   product.price = req.body.price;
//   product.category = req.body._id;
//   product.spec = req.body.spec;
//   product.uses = req.body.uses;
//   product.image = req.body.image;
//
//   product.save(function(err) {
//     if (err) return next(err);
//     req.flash('success', 'Successfully added a product');
//     return res.redirect('/add-product');
//   });
// })
//
// module.exports = router;
