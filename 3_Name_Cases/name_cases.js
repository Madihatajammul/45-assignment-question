"use strict";
let personName = '';
personName = prompt('What is your name?') || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).
    toUpperCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName},Here are your name in:
 Lowercase: ${lowercase}
 Uppercase: ${uppercase}
 Titlecase: ${titlecase}   `);
}