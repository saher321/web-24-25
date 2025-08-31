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
    pcat_list.innerHTML += "<option value="+ i+1 +">" + productCategoryList[i] + "</option>"
}