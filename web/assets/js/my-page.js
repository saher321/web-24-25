let text = "Hello,    World!";
let text2 = text.trim();
console.log("text1 length: " + text.length);
console.log("Trimmed text 2: " + text2);

let mytext = "Hello, World! Welcome to JavaScript.";
let textSplit = mytext.split(" ");
console.log(textSplit);

let replaceText = "This is a book. This is my book.";
// let replacedText = replaceText.replace("book", "pen");
let replacedText = replaceText.replaceAll("book", "pen");
console.log(replacedText);

let text3 = "abc@gmail.com";
let result = text3.includes("@");

if (!text3.includes("@") || !text3.includes(".")) {
  console.log("Invalid email address");
} else {
  console.log("Valid email address");
}

let text4 = text3.indexOf("@");
console.log(text4);

let text5 = text3.charAt(3);
console.log(text5);

let text6 = text3.slice(0, 4);
console.log(text6);
// array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 0, "Lahore", "Karachi");
console.log(fruits);

let sports = ["Cricket", "Football", "Hockey"];

// let mergedArray = [...fruits, ...sports];
let mergedArray = fruits.concat(sports);
console.log(mergedArray);

let cars = ["Saab", "Volvo", "BMW"];
// let cars = [
//   {type: "Saab", model: 2001},
//   {type: "Volvo", model: 2003},
//   {type: "BMW", model: 2020}
// ];
cars.forEach((car) => {
  console.log(car);
});
let numbers = [45, 4, 9, 16, 25];

numbers.map((number) => { console.log(number * 2) });

// filter *************************************************

const users = [
  { id: 1, name: "Martha", role: "admin" },
  { id: 2, name: "John", role: "user" },
  { id: 3, name: "Sara", role: "admin" },
  { id: 4, name: "Preeha", role: "vendor" },
  { id: 5, name: "Steve", role: "user" },
  { id: 6, name: "Alice", role: "user" },
  { id: 7, name: "John Snow", role: "user" },
  { id: 8, name: "Alex", role: "vendor" },
  { id: 9, name: "Sam", role: "vendor" }
];

fetchData();
function fetchData() {
  let tBody = document.getElementById("data-body");
  tBody.innerHTML = "";
  users.map((user) => {
    let tRow = `
  <tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.role}</td>
  </tr>
  `;
    tBody.innerHTML += tRow;
  });
}


// filter data
function filterData() {
  let tBody = document.getElementById("data-body");
  let selectedRole = document.getElementById("role").value;
  // console.log(selectedRole);
  if (selectedRole == "") {
    fetchData();
  } else {
    tBody.innerHTML = "";
    users.filter((user)=>{
      if(selectedRole == user.role){
        let tRow = `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.role}</td>
        </tr>
        `;
        tBody.innerHTML += tRow;
      }
    })
  };

}

// const userRole = "admin";
// function check(users) {
//   if (users.role == userRole) {
//     return users;
//   }
// }

// let output = users.filter(check)
// console.log(output);

