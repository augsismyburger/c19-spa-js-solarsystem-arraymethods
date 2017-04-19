var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(i) {
    el.innerHTML += `<p>${i}</p>`;
});
// Use the map method to create a new array where the first letter of each planet is capitalized
var e2 = document.getElementById("capPlanets");
planets.map(function(i) {
        var caps = i.slice(0, 1).toUpperCase();
        var newPlanets = i.slice(1, i.length);
        e2.innerHTML += `<p>${caps + newPlanets}</p>`;
});

// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = document.getElementById("ePlanets");
function pullEs(string) {
    if (string.indexOf("e") !== -1) {
        ePlanets.innerHTML += `<p>${string}</p>`;
    }
}
planets.filter(pullEs);

// Use the reduce method to create a sentence from the words in the following array
var sentence = document.getElementById("sentence");
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
function makeSentence(acc, val) {
    console.log("ACC:", acc, "VAL:", val);
    return acc + " " + val;

}
sentence.innerHTML = words.reduce(makeSentence);

