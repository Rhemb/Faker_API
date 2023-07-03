const { faker } = require('@faker-js/faker');

const createCompany = () => {
    const newCompany = {
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
    return newCompany;
}

console.log(createCompany());