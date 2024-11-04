// Dictionary data
const dictionaryData = [
    { word: "redirect", meaning: "change" },
    { word: "fulfilled", meaning: "content, satisfied" },
    { word: "walks of life", meaning: "working in a range of works" },
    { word: "justify", meaning: "prove, explain" },
    { word: "enrich", meaning: "improve quality" },
    { word: "depressingly", meaning: "unhappily" },
    { word: "exaggerate", meaning: "overstate, overemphasize" },
    { word: "emphasize", meaning: "show, highlight" },
    { word: "campaigns", meaning: "organized efforts to achieve a goal" },
    { word: "evaluate", meaning: "calculate, judge" },
    { word: "ensure", meaning: "guarantee, make certain" },
    { word: "employ", meaning: "to make use of" },
    { word: "engage", meaning: "involve, participate" },
    { word: "reluctant", meaning: "not willing" },
    { word: "resemblance", meaning: "similarity" },
    { word: "relevance", meaning: "related" },
    { word: "transformation", meaning: "complete change" },
    { word: "refer", meaning: "to mention" },
    { word: "brief", meaning: "short in duration" },
    { word: "swapping", meaning: "exchanging" },
    { word: "regrets", meaning: "feelings of sadness or disappointment" },
    { word: "pave the way", meaning: "making other things possible" },
    { word: "encompasses", meaning: "to include" },
    { word: "assimilates", meaning: "to become part of something" },
    { word: "ingeniously", meaning: "skilled, intelligent" },
    { word: "integrated", meaning: "two things combined" },
    { word: "sustainability", meaning: "ability to maintain" },
    { word: "capacity", meaning: "ability to hold or contain" },
    { word: "drawing", meaning: "attracting attention or interest" },
    { word: "thereby", meaning: "thus, as a result" },
    { word: "endorsing", meaning: "supporting" },
    { word: "feasible", meaning: "able to be achieved" },
    { word: "ritual", meaning: "religious or ceremonial act" },
    { word: "land", meaning: "place, area, location" },
    { word: "warehouse", meaning: "building for storing things" },
    { word: "deforestation", meaning: "cutting down trees in forests" },
    { word: "deterioration", meaning: "becoming worse" },
    { word: "eventual", meaning: "final, in the end" },
    { word: "conservation", meaning: "preservation, protection" },
    { word: "desertion", meaning: "leaving without planning to return" },
    { word: "authenticity", meaning: "the quality of being true" }
];

// Function to display dictionary data
function displayDictionary() {
    const dictionaryDiv = document.getElementById("dictionary");
    dictionaryData.forEach(entry => {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("entry");
        
        const word = document.createElement("h2");
        word.textContent = entry.word;
        
        const meaning = document.createElement("p");
        meaning.textContent = entry.meaning;
        
        entryDiv.appendChild(word);
        entryDiv.appendChild(meaning);
        dictionaryDiv.appendChild(entryDiv);
    });
}

// Run display function on page load
window.onload = displayDictionary;