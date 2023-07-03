const ApiController = require("../controllers/apiControllers")

module.exports = app => {
    app.get('/api/users/new', ApiController.newUser);
    app.get('/api/companies/new', ApiController.newCompany);
    app.get('/api/user/company', ApiController.info);
}