class User {
  userName: string;
  name: string;
  age: number;
  addresss: string;

  constructor() {
    this.userName = "ragasubekti";
    this.name = "Raga Subekti";
    this.age = 20;
    this.addresss = "Jl. Raden Panji Suroso";
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const newUser = new User();
newUser.sayHello();