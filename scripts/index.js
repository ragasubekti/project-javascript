var User = /** @class */ (function () {
    function User() {
        this.userName = "ragasubekti";
        this.name = "Raga Subekti";
        this.age = 20;
        this.addresss = "Jl. Raden Panji Suroso";
    }
    User.prototype.sayHello = function () {
        console.log("Hello, my name is " + this.name);
    };
    return User;
}());
var newUser = new User();
newUser.sayHello();
