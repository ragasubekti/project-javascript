// export {};
var User = /** @class */ (function () {
    function User() {
        this.userName = "ragasubekti";
        this.name = "Raga Subekti";
        this.age = 20;
        this.addresss = "Jl. Raden Panji Suroso";
        this.gender = "Male";
        this.wife = undefined;
    }
    User.prototype.sayHello = function () {
        console.log("Hello, my name is " + this.name);
        console.log("'My age is " + this.age + "'");
        console.log("I live on " + this.addresss);
        console.log("My wife is " + this.wife);
        console.log("My github username is " + this.userName);
    };
    return User;
}());
var newUser = new User();
newUser.sayHello();
