class Greeter {
  constructor() {
    this.greeting = "Hello World 3";
    this.greet = () => {
      console.log(this.greeting);
    };
  }
}

module.exports = new Greeter();
