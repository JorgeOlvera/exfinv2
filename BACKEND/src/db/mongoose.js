const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
