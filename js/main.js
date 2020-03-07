//Hover/Click Symbols Text Reveal
var clickElementId;
var clickElementIdBefore;

/* WORK IN PROGRESS - Clear Text after timeout
function clickTextChange (clickElementID) {
    //text timeout - doesnt work 100%, bugs out randomly
    /*function clearTextAfterTimeout () {
        clearTextTimeoutStatus = 0;
        document.getElementById(clickElementID).style.display= "none";
        clickElementIdBefore = null;
    }
    clearTextTimoutStatus = null;
    clearTextTimoutStatus = setTimeout (clearTextAfterTimeout, 8000);
    if (clickElementIdBefore != null) {
        document.getElementById(clickElementIdBefore).style.display= "none";
        clickElementIdBefore = null;
        document.getElementById(clickElementID).style.display= "block";
        clickElementIdBefore = clickElementID;
    }
    else {
        document.getElementById(clickElementID).style.display= "block";
        clickElementIdBefore = clickElementID;
    }
 }
 */
function clickTextChange (clickElementId) {
    if (clickElementIdBefore != null) {
        document.getElementById(clickElementIdBefore).style.display= "none";
        document.getElementById(clickElementId).style.display= "block";
        clickElementIdBefore = clickElementId;
    }
    else {
        document.getElementById(clickElementId).style.display= "block";
        clickElementIdBefore = clickElementId;
    }
}


function clearText () {
    setInterval(clearText, 3000);
    document.getElementById(clickElementId).style.display= "none";
}

 
  
//The Regiment QUOTES - STUPID RANDOM CONSOL LOGGER
var quoteArray = ["PLACE QUOTES AT END IN THIS ARRAY", "'Fukk Siss!' - Nazman", "'Cool for cats!' - Everest78", "'So you are all experts then, right?' - Tiger", "'Sir, can I pack additional ammo....!' - Dayton aka IRON HEART", "'First of first...!' - Nazman", "'We are not trained for confusion!' - hermano", "'I don't like alpha' - Bornasm", "*unintelligible grumble* - Keller", "'Hey, can you hear the banjo music playing? Because you look like a cousin!' - GorillaRoyale", "'How ever much fucked this game is, its still a thousand times better, than any other shooter game.' - Dirty", "'General rule of thumb: if you don't need to be at the rear of a helicopter, you really shouldn't be there!' - Mirrow"];
var quoteArrayRandom = 1;
var quoteArrayEnd = quoteArray.length;
setInterval(logRandomQuote, 3000);
function logRandomQuote() {
var quoteArrayRandomNew = Math.floor(Math.random() * (quoteArrayEnd - 1)) + 1;
if (quoteArrayRandom != quoteArrayRandomNew) {
    console.log (quoteArray[quoteArrayRandomNew]);
    quoteArrayRandom = quoteArrayRandomNew;
}
else {
    logRandomQuote();
}
}