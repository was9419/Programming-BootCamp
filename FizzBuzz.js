var output = [];
var n = 0;

function fizzBuzz() {
    n = (n + 1);
    
    if (n % 3 === 0 && n % 5 === 0) {
        output.push("FizzBuzz");
    } else if (n % 3 === 0) {
        output.push("Fizz");
    } else if (n % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(n);
    }
    
    console.log(output);
}

