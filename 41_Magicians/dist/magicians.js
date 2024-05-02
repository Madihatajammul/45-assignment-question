"use strict";
//Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians) {
    magicians.forEach(magicians => console.log(magicians));
}
//Array of magicians's names
const magicianNames = ['Derren Brown', 'David Blaine', 'Criss Angel', 'Dynamo'];
//Calling the function to print magician's names
showMagicians(magicianNames);
