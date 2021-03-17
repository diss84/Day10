var lion = {
name: "Simba",
legs: 4,
tails: 1,
roar: "roar-roar"
    };
function myFunction(lion) {
    // Only change code below this line
    delete lion["roar"];
    return lion;
    // Only change code above this line
}
myFunction("roar");

console.log(myFunction("roar"));

module.exports = myFunction;

