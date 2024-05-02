//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let myPlaces = ["Egypt", "India", "USA", "Japan", "France","Canada"];
console.log(myPlaces);

//making a copy of an array
let copyOfArray = myPlaces.slice();
let sortedArray = copyOfArray.slice();
console.log(sortedArray);

//printing original array
console.log(myPlaces);

//reversing original array
//first we have to make a copy of original array
let copyOfArray2 = myPlaces.slice();
let reversedArray = copyOfArray2.reverse();
console.log(reversedArray);

//printing original array
console.log(myPlaces);

//reversing the order of original array 
let reversedArray2 = myPlaces.reverse();
console.log(reversedArray2);

let againreverse = reversedArray2.reverse();
console.log(againreverse); //same as original array

//sorting original array
let sortoriArray = myPlaces.sort();
console.log(sortoriArray);

let reversesortedArray = sortoriArray.reverse();
console.log(reversesortedArray);

//sorting original array

//printing array in reverse alphabetical order