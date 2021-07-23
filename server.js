const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker")


app.use(express.json());
app.use( express.urlencoded({ extended: true }) );

console.log(faker.name.findName())

app.get("/api/users/new", (req, res) => {
    res.json(new User);
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company)
})

app.get("/api/user/company", (req, res) => {
    res.json({user: new User, company: new Company})
}) 

class User {
    constructor() {
        this.id = faker.datatype.number();
        this.fname = faker.name.firstName();
        this.lname = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.number();
        this.cname = faker.company.companyName();
        this.streetName = faker.address.streetName();
        this.cityName = faker.address.cityName();
        this.stateName = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.county();
    }
}
app.listen(port, () => console.log(`Listening on port ${port}`));
