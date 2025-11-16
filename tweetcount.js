var text = prompt("Please, enter any text in here:");
var maxChars = 250
var used = text.length
var left = maxChars - text.length
console.log( String ("You have written " + used + " characters out of " + maxChars + ". You have " + left + " left"));
