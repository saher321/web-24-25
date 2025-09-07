function getCategories(){
  const category = [
    {id: 1, name: "Shoes"},
    {id: 2, name: "T - Shirts"},
    {id: 3, name: "Kids"}
  ];
  return category;
}

function getProducts(){
  const products = [
    { id: 1, cat_id: 2, name: "LV Large grey" },
    { id: 2, cat_id: 1, name: "Addidas black" },
    { id: 3, cat_id: 1, name: "Jordan Dark grey" },
    { id: 4, cat_id: 3, name: "Hat" }
  ];
  return products;
}
// console.log(getProducts()[0].cat_id)
var i; // for outer loop
var j; // for inner loop
var output = document.getElementById("output");
for(i = 0; i < getCategories().length; i++){
  for(j = 0; j < getProducts().length; j++){

    if (getCategories()[i].id == getProducts()[j].cat_id) {
        output.innerText += getCategories()[i].name + ", " + getProducts()[j].name + "\n";
    }
    // var calc =  i + " * " + j + " = " + i*j + '\n';
    // output.innerText += calc;

  }
  // output.innerText += "\n";

}
