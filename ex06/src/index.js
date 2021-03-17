lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
}
lion["roar"] = "roar-roar";
function myFunction(lion) {
    // Only change code below this line
    lion["roar"] = "roar-roar";
    return lion;
    // Only change code above this line
}
myFunction(lion["roar"]);

console.log(myFunction("roar"));

module.exports = myFunction;