// console.log("JS is running");

var productCategoryList = ["Shoes", "T-shirts", "Kids", "Jeans", "Woman"];
var pcat_list = document.getElementById("pcat_list")

// console.log(productCategoryList[1]);
var i;
// variable initialization
// requirement/condition
// increament/ decreament of value/var
for(i = 0; i < productCategoryList.length; i++){
    // console.log(productCategoryList[i]);
    pcat_list.innerHTML += "<option value="+ productCategoryList[i] +">" + productCategoryList[i] + "</option>"
}

function getSelectedValue(){
  var pcat_list = document.getElementById("pcat_list").value;
  var output = document.getElementById("output");

  output.innerText = pcat_list;
}

function getInputValue(){
  console.log("Function called");
  var value = document.getElementById("val").value;
  // var output = document.getElementById("output");
  document.body.style.backgroundColor = value;
  // output.innerText = value;
}