const { faker } = require('@faker-js/faker');

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