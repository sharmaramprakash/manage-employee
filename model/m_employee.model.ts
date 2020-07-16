export {};
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: 'This is a required filed'
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  city: {
    type: String
  }
});

employeeSchema.path('email').validate(val => {
  // the syntax for regular expression pattern in JS is : /pattern/modifier; for example var patt = /w3schools/i  (Here i is for case insensitive)
  let emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;
  return emailRegex.test(val);
}, 'Invalid email');

mongoose.model('Employee', employeeSchema);
