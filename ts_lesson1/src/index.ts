//types - strongly types: string,number,function, void, any , boolean
// we need typescript compiler 
const userName = "Gal amouyal"
console.log(userName)

const userName2: string = "Gal amouyal"
console.log(userName)

const e: string = "galam@gmail.com";
const p: number = 12345678;
const user = { email: e, password: p }

console.log(user);


class Company {
    public companyName: string;
    constructor(_companyName: string) {
        this.companyName = _companyName
    }
}

const obj = {
    "name": "gal",
    "age": 121342,
    "pass": null,
    "address": {
        "city": "ashdod",
        "zipcode": 77812
    }
}