var router = require('express').Router();
var Category = require('../models/category');
var Product = require('../models/product');
var async = require('async');

router.get('/add-category', function(req, res, next) {
  res.render('admin/add-category', { message: req.flash('success') });
});

router.post('/add-category', function(req, res, next) {
  var category = new Category();
  category.name = req.body.name;

  category.save(function(err) {
    if (err) return next(err);
    req.flash('success', 'Successfully added a category');
    return res.redirect('/add-category');
  });
});

router.get('/add-product', function(req, res, next){
  res.render('admin/add-product',{ message: req.flash('success')});
});

router.post('/add-product', function(req, res, next) {

  async.waterfall([
    function(callback){
      var product = new Product();
      console.log(req.body);
      product.name = req.body.name;
      product.price = req.body.price;
      product.category = req.body.category;
      product.spec = req.body.spec;
      product.uses = req.body.uses;
      product.image = req.body.image;

      product.save(function(err) {
        if (err) return next(err);
        req.flash('success', 'Successfully added a product');
        return res.redirect('/add-product');
      });
    }
  ]);
});

// router.get('/products',function(req,res){
//   Product.find({}, function(err,products){
//     res.json(products);
//   });
// });

module.exports = router;
