export {};
const express = require('express');
const employeeRouter = express.Router();
const controller = require('../controller/m_employeecontroller');

// Style 1 - logic here - no controller
employeeRouter.route('/').get(function(req, res) {
  res.status(200).send('This is the employee service!');
});

// Style  - logic here - no controller
employeeRouter.route('/api/employee/home').get(controller.get);
employeeRouter.route('/api/employee/list').get(controller.list);
employeeRouter.route('/api/employee/create').post(controller.addupdate);
employeeRouter.route('/api/employee/edit/:id').get(controller.edit);
employeeRouter.route('/api/employee/remove/:id').get(controller.deleteRecord);

module.exports = employeeRouter;
