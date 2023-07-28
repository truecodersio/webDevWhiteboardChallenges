//1.
//It's good to be in the habit of using a "less than" sign instead of a "less than or equal to" sign since that's most commonly used in for loops to iterate over an array.
for (let i = 0; i < 10; i++) {

}

//2.
//The function could be named anything you want
function printOut() {
    console.log("This prints something");
}

//3.
//Again, it could be named whatever you want
function print(value) {
    console.log(value);
}

//4.
//This asked for a return value so we need to return instead of console logging.
function add(a, b) {
    return a + b;
}

//5.

if (number > 10){

}else if (number < 10){

}

//6.
const obj = {
    message: "You got it!",
    otherProperty: "This is not it"
}

console.log(obj.message);

//7.
//Word needs to be in quotes to be a string value
const myArray = [10, null, "word"];

//8.
//Using length - 1 is a fairly common idea to access the last value in a list
const colors = ["red", "yellow", "blue", "violet"];

console.log(colors[colors.length -1]);