var text = prompt("Please, enter any text in here:");
var maxChars = 250
var used = text.length
var left = maxChars - text.length
//alert("You have written " + used + " characters out of " + maxChars + ". You have " + left + " left");
alert(text.slice (0,250))
