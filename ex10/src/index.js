function myFunction() {
    var myMusic = {
        001: {
            artist: "The Beatles",
            title: "Get back",
            relase_year: 1970,
            formats: {
                1: "LP",
                2: "CD",
                3: "Cassete tape"
            },
            gold: true
        },
        002: {
            artist: "Led Zeppelin",
            title:"Whole Lotta Love",
            trlase_year: 1969,
            formats: {
                1: "LP",
                2: "CD",
                3: "Cassete tape"
            },
        },
    };
    return myMusic;
}
myFunction()[1];
console.log(myFunction()[1]);
module.exports = myFunction;