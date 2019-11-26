const mongoose = require('mongoose')
const connectionURL = 'mongodb+srv://admin:<password>@labweb-z4vb5.mongodb.net/testing?retryWrites=true&w=majority'

// revisa tu connectionURL aqui :-)

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
