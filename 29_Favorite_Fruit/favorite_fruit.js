//Favorite Fruit: Make a array of your favorite fruits, 
//and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["mango", "banana", "orange"];
if (favorite_fruits.includes("apple")) {
    console.log(`You really like mango!`);
}
else if (favorite_fruits.includes("banana")) {
    console.log(`i would  like to eat banana!`);
}
else {
    console.log(`fruits are not available!`);
}
// 2nd statement , using another method , add not available fruit
let fruitavailable = "banana";
if (favorite_fruits.includes(fruitavailable)) {
    console.log(`i would  like to eat ${fruitavailable}`);
}
else {
    console.log(`fruits is  not available`);
}
//3rd statement ,  add  available 
let fruitavailable2 = "mango";
if (favorite_fruits.includes(fruitavailable2)) {
    console.log(`i would  like to eat ${fruitavailable2}`);
}
else {
    console.log(`fruits are  not available`);
}
//4th statement ,  add  available fruit
let fruitavailable3 = "orange";
if (favorite_fruits.includes(fruitavailable3)) {
    console.log(`i would  like to eat ${fruitavailable3}`);
}
//5th statement ,  fruit is not available 
let fruitavailable4 = "apple";
if (favorite_fruits.includes(fruitavailable4)) {
    console.log(`i would  like to eat ${fruitavailable4}`);
}
else {
    console.log(`fruits are  not available`);
}
export {};
