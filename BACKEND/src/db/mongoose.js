const mongoose = require('mongoose')
const connectionURL = require('../config.js').secret

// revisa tu connectionURL aqui :-)

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
