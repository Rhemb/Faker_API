const { faker } = require('@faker-js/faker');

module.exports = {
    _id: faker.number.int(10),
    name: faker.company.name(),
    address: {
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
    }
}