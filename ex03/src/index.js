var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
}
function myFunction(myObj) {
    // Only change code below this line
    var vegetableValue = myFood["vegetable"];
    var fruitValue = myFood["orange"];
    var drinkValue = myFood["water"];
    // Only change code below this line
    return myFood;
}
myFunction();

console.log(myFunction());


module.exports = myFunction(myFood);