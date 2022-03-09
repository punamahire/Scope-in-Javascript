// C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}
console.log("------------------------------------------")

// Conjunction Function
const conjunction = function (firstWord, secondWord) {
    return console.log(`${firstWord} ${secondWord}`)
}
conjunction("Master", "Card")

console.log("------------------------------------------")

// Mod Squad
const modSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    series: {
        "start": "1968",
        "end": "1973"
    }
}
const objToString = (modSquad) => {
    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    modSquad.members.forEach(member => {
        console.log(HTMLRepresentation += `<div>${member}</div>`)
        // console.log(displayMsg)
    })
}
objToString(modSquad)
console.log("------------------------------------------")

// Simon Says
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidLocation = false;
let numOfInvalidLoc = 0;
for (let k = 0; k < locations.length; k++) {
    for (let l = 0; l < locations[k].length; l++) {
        console.log(locations[k][l]);
        if (locations[k][l] > 2) {
            invalidLocation = true;
            numOfInvalidLoc++;
            console.log("This location is invalid");
        }
    }
}
console.log("invalidLocation", invalidLocation);
console.log(`There were ${numOfInvalidLoc} invalid locations`)
console.log("------------------------------------------")

// Advanced Challenge: Lambda Llama
let nameWithSuffix = ""
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    // console.log(randomizer);

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        nameWithSuffix = name + suffix
        return nameWithSuffix
    }

    return namer()
}
console.log(llamaNamer());


