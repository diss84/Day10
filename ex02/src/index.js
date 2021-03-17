var myClothes = {
    "hat": "Fedora",
    "shirt": "Nike",
    "shoes": "Converse"
}
function myFunction(myObj) {
    // Only change code below this line
    hatValue = myClothes.hat;
    shirtValue = myClothes.shirt;
    shoesValue = myClothes.shoes;
    // Only change code below this line
    return  myObj;
}

console.log(myFunction(myClothes.hat));
console.log(myFunction(myClothes.shirt));
console.log(myFunction(myClothes.shoes));


module.exports = myFunction(myClothes);
