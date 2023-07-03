const NewUser = require("../models/NewUser");
const NewCompany = require("../models/NewCompany");
const CompanyAndUser = require("../models/CompanyAndUser");

module.exports = {
    newUser : (req, res) => { return res.json(NewUser); },
    newCompany : (req, res) => { return res.json(NewCompany); },
    info : (req, res) => { return res.json(CompanyAndUser); }
}