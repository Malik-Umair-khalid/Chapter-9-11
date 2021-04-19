//1. Write a program to take “city” name as input from user. Ifuser enters “Karachi”, welcome the user like this:“Welcome to city of lights”


// var city = prompt ("Enter Your City")

// if (city === "Karachi") {
//   alert ("Welcome To The City Of Lights")
// }

// 2.Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt ("Enter Your Gender")

// if (gender === "male") {
//     alert ("Good Morning Sir")
// }
// else if (gender === "female") {
//     alert ("Good Morning Madam")
// }

// 3.Write a program to take input color of road traffic signal from the user & show the message according to this table

// var signal = prompt ("Enter Signal Colour")
// if (signal === "Red") {
//     alert ("Must Stop")
// }
// if (signal === "Yellow" ) {
//     alert ("Ready To Move")
// }
// if (signal === "green" ) {
//     alert ("Move Now")
// }
// else {
//     alert ("Try Agian")
// }

// 4.Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var fuel = +prompt ("Remaining Fuel In Car In Litres")
// if (fuel < "0.25" ){
//     alert ("Plese Re Fill The Fuel In Your car")
// }

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Working

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// // Not Working

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// // Not Working

// if (c === 13){
// alert("condition 2 is true");
// }

// // Working

// if (++c < 14){
// alert("condition 3 is true");
// }

// // Not Working

// if(c === 14){
// alert("condition 4 is true");
// }

// // Working

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // Working

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
// // Nai Samaj Aya

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
// // Working

// 6.Write a program to take input the marks obtained in threesubjects & total marks. Compute & show the resultingpercentage on your page. Take percentage & computegrade as per following table:

// var marksObtained = +prompt("Enter Marks Obtained")
// var totalMarks = +prompt ("Enter Total Marks")
// var percentage = marksObtained / totalMarks * 100
 
// if(percentage >= 80) {
//     document.write("<h1> Marks Sheet </h1>")
//     document.write("Total Marks", "&nbsp", "=", "&nbsp", totalMarks, "<br>")
//     document.write("Marks Obtained", "&nbsp", "=", "&nbsp", marksObtained, "<br>")
//     document.write("Your Percentage", "&nbsp", "=", "&nbsp", percentage, "%", "<br>")
//     document.write("Grade", "&nbsp", "=", "A+", "<br>")
//     document.write("Remarks", "&nbsp", "=", "&nbsp", "Exellent", "<br>")
// }
// if(percentage >= 70, percentage < 80) {
//     document.write("<h1> Marks Sheet </h1>")
//     document.write("Total Marks", "&nbsp", "=", "&nbsp", totalMarks, "<br>")
//     document.write("Marks Obtained", "&nbsp", "=", "&nbsp", marksObtained, "<br>")
//     document.write("Your Percentage", "&nbsp", "=", "&nbsp", percentage, "%", "<br>")
//     document.write("Grade", "&nbsp", "=", "A", "<br>")
//     document.write("Remarks", "&nbsp", "=", "&nbsp", "Good", "<br>")
// }
// if(percentage >= 60, percentage < 70) {
//     document.write("<h1> Marks Sheet </h1>")
//     document.write("Total Marks", "&nbsp", "=", "&nbsp", totalMarks, "<br>")
//     document.write("Marks Obtained", "&nbsp", "=", "&nbsp", marksObtained, "<br>")
//     document.write("Your Percentage", "&nbsp", "=", "&nbsp", percentage, "%", "<br>")
//     document.write("Grade", "&nbsp", "=", "B", "<br>")
//     document.write("Remarks", "&nbsp", "=", "&nbsp", "You Need To Improve", "<br>")
// }
// if(percentage >= 50, percentage < 60) {
//     document.write("<h1> Marks Sheet </h1>")
//     document.write("Total Marks", "&nbsp", "=", "&nbsp", totalMarks, "<br>")
//     document.write("Marks Obtained", "&nbsp", "=", "&nbsp", marksObtained, "<br>")
//     document.write("Your Percentage", "&nbsp", "=", "&nbsp", percentage, "%", "<br>")
//     document.write("Grade", "&nbsp", "=", "C", "<br>")
//     document.write("Remarks", "&nbsp", "=", "&nbsp", "Tri Again", "<br>")
// }
// if(percentage >= 35, percentage < 50) {
//     document.write("<h1> Marks Sheet </h1>")
//     document.write("Total Marks", "&nbsp", "=", "&nbsp", totalMarks, "<br>")
//     document.write("Marks Obtained", "&nbsp", "=", "&nbsp", marksObtained, "<br>")
//     document.write("Your Percentage", "&nbsp", "=", "&nbsp", percentage, "%", "<br>")
//     document.write("Grade", "&nbsp", "=", "D", "<br>")
//     document.write("Remarks", "&nbsp", "=", "&nbsp", "Fail", "<br>")
// }
// if(percentage >= 25, percentage < 35) {
//     document.write("<h1> Marks Sheet </h1>")
//     document.write("Total Marks", "&nbsp", "=", "&nbsp", totalMarks, "<br>")
//     document.write("Marks Obtained", "&nbsp", "=", "&nbsp", marksObtained, "<br>")
//     document.write("Your Percentage", "&nbsp", "=", "&nbsp", percentage, "%", "<br>")
//     document.write("Grade", "&nbsp", "=", "F", "<br>")
//     document.write("Remarks", "&nbsp", "=", "&nbsp", "Fail", "<br>")
// }

// 7. Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.a. If user guesses the same number, show “Bingo! Correctanswer”.b. If the guessed number +1 is the secret number, show“Close enough to the correct answer”.

// var number = 8;
// var guess = +prompt("Guess The Number")

// if (guess === 8){
//     alert("Bringo Correct Answer")
// }
// else if (guess === 9, guess === 7){
//     alert("Close Enough To The Correct Answer")
// }
// else{
//     alert("Try again")
// }

// 8.Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var number = +prompt("Enter Your Number");

// if ((number % 3) === 0){
//     alert("Your Number is Divisible by 3")
// }
// else {
//     alert("Your Number is not Divisible by 3")
// }

// 9.Write a program that checks whether the given input is an even number or an odd number.

// var number = +prompt("Enter Your Number");

// if ((number % 2) === 0){
//     alert("Your Number is even")
// }
// else {
//     alert("Your Number is Odd")
// }

// Write a program that takes temperature as input and shows a message based on following criteria

// var temperature = +prompt("Enter Temperature")
// if (temperature === 40){
//     alert("Too Hot Out Side")
// }
// if (temperature === 30){
//     alert("The Weather Today Is Normal")
// }
// if (temperature === 40){
//     alert("Today's Weather is Cool")
// }
// if (temperature === 40){
//     alert("OMG Today's Weather is SO Cool")
// }

// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:

// var number1 = +prompt("Enter Your First Number")
// var number2 = +prompt("Enter Your Second Number")
// var operation = +prompt("1 For +, 2 for -, 3 for x, and 4 for /")

// if (operation === 1){
//     alert(number1 + number2)
// }
// else if (operation === 2){
//     alert(number1 - number2)
// }
// else if (operation === 3){
//     alert(number1 * number2)
// }
// else if (operation === 4){
//     alert(number1 / number2)
// }