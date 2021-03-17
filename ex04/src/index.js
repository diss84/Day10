var players = {
    7: "Muhamed Bešić",
    10: "Miralem Pjanić",
    11: "Edin Džeko"
}
function myFunction(myObj) {
    // Only change code below this line
    var playerNumber =10;
    var player = myObj[playerNumber];
    return player;
    // Only change code above this line
}
console.log(myFunction(players));

module.exports = {players, myFunction};