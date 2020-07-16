var mongoose = require('mongoose');
mongoose.connect(
  'mongodb://127.0.0.1:27017/ramdb',
  { useUnifiedTopology: true, useNewUrlParser: true },
  err => {
    if (!err) {
      console.log('Mongodb connection successful.');
    } else {
      console.log('Error in DB connection.');
    }
  }
);
