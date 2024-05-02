"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
Object.defineProperty(exports, "__esModule", { value: true });
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let guestsList = ["Hamza", "Usman", "Ayesha", "Areeba"];
let cantMakeIt = guestsList[1];
console.log(cantMakeIt, "can't make it to dinner.");
guestsList.splice(0, 1, "Ali");
guestsList.forEach(guest => {
    console.log(` Assalam o Alaikum Dear ${guest} ,"I would like to invite you to dinner with me .`);
});
