// Nicolas Castiblanco
// INST377
// Lab 4

let fullName = "Nicolas Castiblanco"; // 18 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"

const myName = document.querySelector(".header");
myName.innerText = fullName + "'s Lab 4";

// // 2 Insert two paragraphs into the div with the class "content"
// //  Label each paragraph with a distinct class name

const content = document.querySelector(".content");

const p1 = document.createElement("p");
const p2 = document.createElement("p");

p1.className = "content1";
p1.innerText = "First paragraph";

p2.className = "content2";
p2.innerText = "Second paragraph";

content.appendChild(p1);
content.appendChild(p2);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

let length = fullName.length - 1
p1.innerText = "My name has " + length + " characters.";

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

const third = fullName[2].toUpperCase();
const lastThree = fullName.substring(length-2);
p2.innerText = "The 3rd character in my name is " + third + ". \n" + "The last 3 characters of my last name are " + lastThree;

// 6 Add a new line to your second paragraph


// 8 Substring your first and last name into two separate variables

const first = fullName.substring(0,fullName.indexOf(","));
const last = fullName.substring(fullName.indexOf(","),fullName.length);

// 9 Add the total length of your first and last names together

const totalLength = first.length + last.length;

// 10 Display that total next to your name in your header

myName.innerText+= " The total length of my name in letters is " + totalLength