

function getDay(){
    var dayNumber = document.getElementById("day-no").value;
    var result = document.getElementById("output");

    switch(dayNumber){
        case "1":
            result.innerText = "The Day is Monday.";
            break;
        case "2":
            result.innerText = "The Day is Tuesday.";
            break;
        case "3":
            result.innerText = "The Day is Wednesday.";
            break;
        case "4":
            result.innerText = "The Day is Thursday.";
            break;
        case "5":
            result.innerText = "The Day is Friday.";
            break;
        case "6":
            result.innerText = "The Day is Saturday.";
            break;
        case "7":
            result.innerText = "The Day is Sunday.";
            break;
        default:
            result.innerText = "Invalid day number! Range 1-7";
    }
}
