//Hover-over-Symbols Text
function hoverTextShow (hoverID)
{
    document.getElementById(hoverID).style.display= "block";
}

function hoverTextHide (hoverID)
{
    document.getElementById(hoverID).style.display= "none";
}



  
  
//The Regiment QUOTES - STUPID RANDOM CONSOL LOGGER
var quoteArray = ["PLACE QUOTES AT END IN THIS ARRAY", "'Fukk Siss!' - Nazman", "'Cool for cats!' - Everest78", "'So you are all experts then, right?' - Tiger", "'Sir, can I pack additional ammo....!' - Dayton aka IRON HEART", "'First of first...!' - Nazman", "'We are not trained for confusion!' - hermano", "'I don't like alpha' - Bornasm", "*unintelligible grumble* - Keller"];
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