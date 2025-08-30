// DATA TYPES
// number: 1234, 2.4, 3999999999
// string: "This is dummy text", "Javascript"
// array: array1 = ["Apple", "Orange", "Bnana"]; array1[0]
// object: obj1 = { name: "Usman", email: "abc@gmail.com" }
// obj1.name, obj1.email;
// var text = ["Apple", "Orange", "Bnana"];
var text = { name: "Usman", email: "abc@gmail.com" };

// console.log("The result is: " + JSON.stringify(text));
// console.log(text[0]);
// // alert(text.name);
var a = 23;
var b = 45;
var c = a + b;
console.log("The result is: " + c);

// sum function
function getSum(){
    var number1 = document.getElementById("no1").value;
    var number2 = document.getElementById("no2").value;
    var output = document.getElementById("output");
    // number1 + number2 + 3 + (number1 + number2)
    // console.log(number1, number2);

    // var sum = parseInt(number1) + parseInt(number2);
    var sum = parseInt(number1) + parseInt(number2) + 3 + (parseInt(number1) + parseInt(number2));
    output.innerText = sum;
}
function findPercentage(){
    var totalMarks = 1100;
    var sbj1 = document.getElementById("sbj1").value;
    var sbj2 = document.getElementById("sbj2").value;
    var output = document.getElementById("output");
    var obtainedMarks = parseInt(sbj1) + parseInt(sbj2);
    var percentage = (obtainedMarks/totalMarks) * 100;
    output.innerText = percentage;
}
