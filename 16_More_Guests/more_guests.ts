//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15.
 //Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array.
 //• Use append() to add one new guest to the end of your list.
  //• Print a new set of invitation messages, one for each person in your list.
  const myFriends = ["Ahmed", "Ali", "Asad"];
  console.log(myFriends);
  console.log(
    `we have 3 more friends to invite on dinner\n`)
    myFriends.unshift("Ayesha");

    console.log(myFriends);

    myFriends.splice(2, 0, "Sara");

    myFriends.push("Sana");
    console.log(myFriends);

    for(let i = 0; i < myFriends.length; i++){
        console.log(`my dear friends. ${myFriends[i]}, you are invited at my home for dinner.`);
    }