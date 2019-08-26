//types - strongly types: string,number,function, void, any , boolean
// we need typescript compiler 
var userName = "Gal amouyal";
console.log(userName);
var userName2 = "Gal amouyal";
console.log(userName);
var e = "galam@gmail.com";
var p = 12345678;
var user = { email: e, password: p };
console.log(user);
var Company = /** @class */ (function () {
    function Company(_companyName) {
        this.companyName = _companyName;
    }
    return Company;
}());
var obj = {
    "name": "gal",
    "age": 121342,
    "pass": null,
    "address": {
        "city": "ashdod",
        "zipcode": 77812
    }
};
