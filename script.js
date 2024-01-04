import talks from "./talks.json" assert {type:'json'};
const talkBox = document.getElementById("talkBox");
const talk = talks["talks"][getRandomTalk(talks.talks.length)];


// Create list of empty elements.
const elements = [];
const numEntries = 4;
for (let i=0;i<numEntries;i++) {
    elements.push(document.createElement('p'));
}

// Populate elements with text.
elements[0].textContent = talk.title;
elements[1].textContent = talk.author;
elements[2].textContent = talk.synopsis;
elements[3].textContent = talk.month + ", " + talk.year;
elements.push(document.createElement('a'));
elements[4].textContent = "Read Now";
elements[4].setAttribute('href',talk.link);

// console.log(talks.talks.length);

// Append elements to the document.
elements.forEach(el => talkBox.appendChild(el));

function getRandomTalk(numTalks) {
    const day = new Date();
    const seed = day.getMonth() * day.getFullYear() + day.getDate();
    return randRange(seed,numTalks);
}


function randRange(seed,max) {
    return ((Math.pow(seed,2)*13) * ((seed%2) * 53 + (seed%3) *22) + seed) % max;
}

function test_randRange(max) {
    const results = {}
    for (let i= 0;i<5000;i++) {
        const seed = Math.floor(Math.random() * 3000)
        const result = randRange(seed,max);
        if (result in results) {
            results[result] += 1;
        }
        else {
            results[result] = 1;
        }
    }
    return results;
}