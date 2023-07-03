const { faker } = require('@faker-js/faker');

module.exports = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        _id: faker.number.int(10)
}
