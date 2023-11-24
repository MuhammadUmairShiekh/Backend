const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdsSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  image_url: {
    required: true
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,

  },
  condition: {
    type: String,
  },
  number: {
    type: Number,
    required: true,


  },
  price: {
    type: Number,
    required: true,
    min: 100
  }
})

const Ads = mongoose.model('ads', AdsSchema)

module.exports = Ads
