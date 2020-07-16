// TODO the below two lines are not working why??
require('../model/m_employee.model');
const mongoose = require('mongoose');
const EmployeeModel = mongoose.model('Employee');

export function get(_req, _res) {
  _res.render('employee/addoredit', {
    viewTitle: 'Insert Employee'
  });
}
export function create(_req, _res) {
  let employee = new EmployeeModel();
  employee.fullname = _req.body.fullname;
  employee.email = _req.body.email;
  employee.mobile = _req.body.mobile;
  employee.city = _req.body.city;

  employee.save((err, doc) => {
    if (!err) {
      _res.redirect('list'); // INFO Visit: https://expressjs.com/en/4x/api.html#res.redirect
    } else {
      if (err.name == 'ValidationError') {
        // TODO Why I can't I put a lable in this same employee module and call it as i did with get and create!
        handleValidationOnError(err, _req.body);
        _res.render('employee/addoredit', {
          viewTitle: 'Insert Employee',
          employee: _req.body
        });
      } else {
        console.log('Error happend duing inserting record' + err);
      }
    }
  });
}
export function list(_req, _res) {
  EmployeeModel.find((err, document) => {
    if (!err) {
      _res.render('employee/list', {
        //  INFO: The handlebars already take mapped view folder in the project + "employee/list"
        list: document
      });
    } else {
      console.log('Error fetching data from database!', +err);
    }
  });
}
export function edit(_req, _res) {
  EmployeeModel.findById(_req.params.id, (err, document) => {
    if (!err) {
      _res.render('employee/addoredit', {
        viewTitle: 'Update Employee',
        employee: document
      });
    }
  });
}
export function addupdate(_req, _res) {
  if (_req.body._id == '') {
    create(_req, _res);
  } else {
    updateDocuments(_req, _res);
  }
}
export function updateDocuments(_req, _res) {
  EmployeeModel.findOneAndUpdate(
    { _id: _req.body._id },
    _req.body,
    { runValidators: true }, // to validate the updated value to Schema
    (err, document) => {
      if (!err) {
        _res.redirect('list');
      } else {
        if (err.name == 'ValidationError') {
          // TODO Why I can't I put a lable in this same employee module and call it as i did with get and create!
          handleValidationOnError(err, _req.body);
          _res.render('employee/addoredit', {
            viewTitle: 'Update Employee',
            employee: _req.body
          });
        } else {
          console.log('Error happend duing updating record' + err);
        }
      }
    }
  );
}

export function deleteRecord(_req, _res) {
  EmployeeModel.findByIdAndRemove(_req.params.id, (err, document) => {
    if (!err) {
      _res.redirect('/api/employee/list');
    } else {
      console.log('Error happend duing updating record' + err);
    }
  });
}
function handleValidationOnError(err, body) {
  console.log('validation');
  for (let field in err.errors) {
    switch (err.errors[field].path) {
      case 'fullname':
        body['fullnameError'] = err.errors[field].message;
        break;
      case 'email':
        body['emailError'] = err.errors[field].message;
        break;
      default:
        break;
    }
  }
}
