// Chp 21-25

// Q1

// var fName = prompt("Enter your First Name");
// var lName = prompt("Enter your Second Name");
// var fullName = fName + " " + lName;
// alert("Hello " + fullName + " Welcome back")

// Q2

// var user = prompt("Enter your favourite Mobile with its Model");
// var length = user.length;
// document.write("My favourite phone is: " + user + "<br />");
// document.write("Length of string: " + length);

// Q3

// var word = "Pakistani";
// for (var i = 0; i < word.length; i++) {
//     if(word[i] === "n"){
//         document.write("String: " + word + "<br />");
//         document.write("Index of n: " + word.indexOf(word[i]));
//         break;
//     }
// }

// Q4

// var word = "Hello World";
// for (var i = 0; i < word.length; i++) {
//     if(word[i] === "l"){
//         document.write("String: " + word + "<br />");
//         document.write("Last Index of l: " + word.lastIndexOf(word[i]));
//         break;
//     }
// }

// Q5

// var word = "Pakistani";
// for (var i = 0; i < word.length; i++) {
//     if(word[i] === "i"){
//         document.write("String: " + word + "<br />");
//         document.write("Character at index 3: " + word[i]);
//         break;
//     }
// }

// Q6

// var fName = prompt("Enter your First Name");
// var lName = prompt("Enter your Second Name");
// var fullName = fName.concat(" " + lName);
// alert("Hello " + fullName + " Welcome back")

// Q7

// var word = "Hyderabad";
// var replace = word.replace("Hyder","Islam");
// document.write("City: " + word);
// document.write("<br />")
// document.write("After replacement: " + replace);

// Q8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.split("and").join("&")
// console.log(replace)

// Q9

// var string = "472";
// var number = Number(string);
// document.write("Value: " + string);
// document.write("<br />")
// document.write("Type: " + typeof(string));
// document.write("<br />")
// document.write("Value: " + number);
// document.write("<br />")
// document.write("Type: " + typeof(number));

// Q10

// var user = prompt("Enter Your favourite Snack");
// document.write("User input: " + user);
// document.write("<br />")
// var upperCase = user.toUpperCase();
// document.write("Upper case: " + upperCase);

// Q11

// var user =prompt("Enter Any Word");
// var cap = user.charAt(0).toUpperCase() + user.slice(1);
// document.write("User input: " + user);
// document.write("<br />")
// var upperCase = user.toUpperCase();
// document.write("Title case: " + cap);

// Q12

// var num = 35.36;
// var string = num.toString();
// var remove = string.split(".").join("");
// document.write("Number: " + num);
// document.write("<br />")
// document.write("Result: " + remove);

// Q13

// var user = prompt("Enter your User Name");
// for (var i = 0; i < user.length; i++) {
//     if (user[i] === "@" || user[i] === "." || user[i] === "," || user[i] === "!") {
//         alert("Enter correct User Name")
//     }
// }

// Q14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("Welcome to ABC Bakery. What to do you want to order sir/ma'am");
// var lowerCase = user.toLowerCase();
// var flag = false;
// for (let i = 0; i < a.length; i++) {
//     if (lowerCase === a[i]) {
//         flag = true;
//         document.write(lowerCase + " is available at index " + i + " in our bakery")
//     }
// }
// if (flag === false) {
//     alert("We are sorry. " + lowerCase + " is not available in our bakery");
// }

// Q15

var user = prompt("Enter Your Password");
var flag = false;
for (let i = 0; i < user.length; i++) {
    if (!isNaN(user[0])) {
        alert("Password can not begin with a number");
        break;
    }
    else if (user.length < 6) {
        alert("Password must be 6 letters long");
        break;
    }
    else if (user.charCodeAt(i) >= 65 && user.charCodeAt(i) <= 122) {
        if (user.charCodeAt(i + 1) <= 57 && user.charCodeAt(i + 1) >= 48) {
            document.write("Entered password: " + user)
            flag = true;
            break;
        }

    }
}

// Q16

// var university = "University of Karachi";
// var split = university.split("");
// for (var i = 0; i < split.length; i++) {
//     document.write(split[i] + "<br />");
// }

// Q17

// var word = "Pakistan";
// var reverse = word.split("").reverse();
// document.write("User input: " + word);
// document.write("<br />")
// document.write("Last character of input: " + reverse[0]);

// Q18

// var word = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for (let i = 0; i < word.length; i++) {
//     if (word.slice(i, i + 3) === "The" || (word.slice(i, i + 3) === "the")) {
//         ++count;
//     }
// }
// document.write("Text: " + word);
// document.write("<br />")
// document.write("There are " + count + " occurence(s) of word 'the'");
// document.write("<br />")