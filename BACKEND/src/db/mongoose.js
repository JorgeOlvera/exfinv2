const mongoose = require('mongoose')
const connectionURL = require('../config.js').connectionURL

// revisa tu connectionURL aqui :-)

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
