var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String, unique: true},
  price: Number,
  category: {type:Schema.Types.ObjectId,ref:'Category'},
  spec: String,
  uses: String,
  image: String
});

ProductSchema.plugin(mongoosastic, {
  hosts: [
    'localhost:9200'
  ]
});
module.exports = mongoose.model('Product', ProductSchema);
