let greet = require("./greet");
greet();

let greet2 = require("./greet2");
greet2.greet();

let greet3 = require("./greet3");
greet3.greet();
greet3.greeting = "Hello World 4";
greet3.greet();

let greet4 = require("./greet3");
greet4.greet();

let Greeter = require("./greet4");
let greet5 = new Greeter();
greet5.greet();
