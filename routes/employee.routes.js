const employeeController = require('../controller/employeeController');

module.exports = function (router) {
    router.route('/employees')
        .get(employeeController.getAll)
        .post(employeeController.add);
        
    router.route('/employees/:id')
        .get(employeeController.findById)
        .put(employeeController.update)
        .delete(employeeController.delete);
}
