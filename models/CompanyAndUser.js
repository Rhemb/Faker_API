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

const createUser = () => {
    const newUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        _id: faker.number.int(10)
    }
    return newUser;
}

console.log(createUser());
console.log(createCompany());