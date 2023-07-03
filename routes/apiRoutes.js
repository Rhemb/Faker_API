const ApiController = require("../controllers/apiControllers")

module.exports = app => {
    api.get("/api/users/new", ApiController.newUser);
    api.get("api/companies/new", ApiController.newCompany);
    api.get("api/user/company", ApiController.info);
}