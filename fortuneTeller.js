console.log("Hello! Based on your responses, here is your fortune:");

let motherName = prompt("What is your mother's name?");
alert("Confirm that your mother's name is " + motherName);

let streetName = prompt("Enter the name of the street you grew up on");
alert("Confirm that the street name is " + streetName);

let favColor = prompt("What was your favourite color as a child");
alert("Confirm that your fovourite color is " + favColor);

let age = Number(prompt("What is your age?"));
alert("Confirm that your are " + age + " years old");

let someNum = Number(prompt("Enter any number between 1 and 10"));
alert("You entered " + someNum + ". Hit OK and follow instructions on web page to see your fortune");

console.log("In " + someNum + " years you are going to meet your best friend named " + motherName + " " + streetName + ".");

let children = age % someNum;
if (children === 0) {
    children = "no child";
} else if (children === 1) {
    children = children + " child";
} else {
    children = children + " children";
}
console.log("You will get married in " + (age + someNum) + " years and have " + children + ".");

console.log("In " + Math.round(age / someNum) + " years you are going to dye your hair " + favColor + ".");
