var school = {
    name: "Arena",
    location: "Sarajevo",
    established: 2020
}
function myFunction(name) {
    school.name = "Paragon";
    return school;
}
myFunction("Paragon");
console.log(myFunction(school.name));

module.exports = { school, myFunction};