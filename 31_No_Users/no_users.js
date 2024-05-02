//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
//Checking Usernames: Do the following to create a program that simulates
// how websites ensure that everyone has a unique username.
var username2 = ["admin", "user1", "user2", "user3"];
//to remove all members use,
//1st statement
username2 = [];
console.log(username2);
//now comment out the 1st statement then print the next statement in console
if (username2.length > 0) {
    for (var i = 0; i < username2.length; i++) {
        if (username2[i] == "admin") {
            console.log(`Hello.concat(username2[i])," would you like to see a status report?\n"`);
        }
        else {
            console.log("Hello ".concat(username2[i], " thank you for logging in again!"));
        }
    }
}
else {
    console.log("We need to find some users");
}
export {};
