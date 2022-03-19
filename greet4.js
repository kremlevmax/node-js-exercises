class Greeter {
  constructor() {
    this.greeting = "Hello World 5";
    this.greet = () => {
      console.log(this.greeting);
    };
  }
}

module.exports = Greeter;
