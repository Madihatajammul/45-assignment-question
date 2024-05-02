"use strict";
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let myFriends = ["Osama", "Ayesha", "Amna"];
console.log(`i am inviting ${myFriends.length}
number of my friends to my dinner which are following\n`);
for (let i = 0; i < myFriends.length; i++) {
    console.log(`${i + 1}. ${myFriends[i]}`);
}
//Guest list from Exercise 14
let guestList = ["Hamza", "Laiba", "Nabiha", "Saba"];
//Output the total number of guests invited to dinner
console.log(`I am inviting ${guestList.length} people to dinner.`);
