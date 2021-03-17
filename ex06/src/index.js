    var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
}
function myFunction() {
    // Only change code below this line
    lion.roar = "roar-roar";
    return lion;
    // Only change code above this line
}
myFunction("roar");

console.log(myFunction("roar"));

module.exports = myFunction;