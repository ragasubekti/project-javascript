// export {};

class User {
  userName: string;
  name: string;
  age: number;
  addresss: string;
  gender: string;
  wife: undefined;
  married: boolean;
  hobbies: Array<string>;

  constructor() {
    this.userName = "ragasubekti";
    this.name = "Raga Subekti";
    this.age = 20;
    this.addresss = "Jl. Raden Panji Suroso";
    this.gender = "Male";
    this.wife = undefined;
    this.married = false;
    this.hobbies = ["Sleeping", "Listening to Music", "Playing Video Games"];
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
    console.log(`My age is ${this.age}`);
    console.log(`I live on ${this.addresss}`);
    console.log(`My wife is ${this.wife}`);
    console.log(`Am i married? ${this.married}`);
    console.log(`My hobby are: ${this.hobbies}`);
    console.log(`My github username is ${this.userName}`);
  }
}

const newUser = new User();
newUser.sayHello();
