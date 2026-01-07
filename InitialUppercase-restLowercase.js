var name = prompt("What is your name?");
var capital = name.slice (0,1);
var name1 = name.slice (1,name.lenght);
capital = capital.toUpperCase();
name1 = name1.toLowerCase();
alert("My name is: " + capital + name1);
