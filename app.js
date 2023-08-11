// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.

// for(var i = 0; i < 5; i++){
// document.write("hello world"+"</br>")
// };

// 2. Write a program to print numeric counting from 1 to 10.

// for(var i = 1; i < 11; i++){
//     document.write([i]+"<br>")
// };

// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.

// var userInput = +prompt("write number ");

// for(var i = 1; i < 11; i++){
//     document.write(userInput *[i]+"<br>")
// };

// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop

// var mobiles = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// for(var i = 0; i < mobiles.length; i++){
//     document.write(mobiles[i]+"<br>")
// };

// 5. Write a program to print items of the following array using for
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(var i = 0; i < fruits.length; i++){
//     // document.write(fruits[i]+"<br>")

// };

// 6. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.

// var arraySize = +prompt("type array size");
// var favFruits = [];

// for(var i = 0; i < arraySize; i++){
//     var userInput = prompt("enter your favourite fruits")
//     favFruits.push(userInput)
// };
// console.log(userInput);??????

// 7. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//a//
// for(var i = 1; i <16; i++){

//     document.write([i]+"," )

// };

//b//
// for(var i = 10; i > 0; i--){
//     document.write([i]+",")

// };

//c//
// for(var i = 0; i < 21; i = i+2){
//     document.write([i]+",")
// };

//d//

// for(var i = 1; i < 20; i = i+2){
//          document.write([i]+",")
//      };

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// for(var i = 2; i < 21; i = i+2){
//     document.write(i)+"k"+","
// };???

// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("search bakery items here");

// for(var i = 0; i < bakeryItems.length; i++){
//     if(userInput===bakeryItems[i]){
//         document.write("yes "+ userInput+ " is available and ready to serve")
//     }
// };
// if(userInput===bakeryItems[i]){
//     document.write("yes"+ userInput+ "is available and ready to serve")
// }
// else{
//     document.write("sorry it is not available")
// }///??????

// 9. Write a program to identify the largest number in the given
// array.
// A = [24, 53, 78, 91, 12]

// var A = [24, 53, 78, 91, 12];

// var largest = Math.max(24, 53, 78, 91, 12)
// document.write(largest);

// 10. Write a program to identify the smallest number in the given
// array.
// A = [24, 53, 78, 91, 12]

// var A = [24, 53, 78, 91, 12];

// var smallest = Math.min(24, 53, 78, 91, 12);

// document.write(smallest);

// 11. Write a program to identify the largest & the smallest
// number in the given array.
// A = [24, 53, 78, 91, 12]

// var A = [24, 53, 78, 91, 12];

// var largest = Math.max(24, 53, 78, 91, 12);

// var smallest = Math.min(24, 53, 78, 91, 12);

// document.write(smallest);

// document.write(largest);

// 12. Write a program to print multiples of 5 ranging 1 to 100

// for(var i = 5; i < 101; i = i+5 ){
//     document.write(i+",")
// };

// 13. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// // var scores = [58, 73, 89, 90];

// Write a program to generate the following HTML table in your
// browser using JS.

//????????????/////

// 14. Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34

// var scores = [12, 45, 3, 22, 34, 50];
// var userInput = prompt("where u want to stop length");

// for(var i = 0; i < scores.length; i++){

// if(userInput === scores[i]){
//     document.write(scores(i))
// }
// else{
//     document.write("please enter valid length");
// }
// };
//???????????????????????????

// 15. You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for
// loops.


// var firstArray = [ 
// [1, 2, 3],
// [4, 5, 6], 
// [7, 8, 9],
// ];

// for (var i = 0; i < firstArray.length; i++) {
//     var element = firstArray[i];
//     for (var j = 0; j < element.length; j++) {
//         var innerElement = element[j];
//         document.write(innerElement)
//     }
//     document.write("<br>")
// }


// 16. Write a program to repeatedly print the value of the variable 
// num which is input by user. Value should be decreasing by 0.5 
// each time, as long as x Value remains positive.


// var userInput = +prompt("type number value here");


// for(var i = userInput; i >= 0; i = i- 0.5){
//      document.write(i+"<br>")

// }



// 19. Write a program that will write out a wedge of stars. The user 
// will enter the initial number of stars, and the program will write 
// out lines of stars where each line has one few star than the 
// previous line. Initial number of stars: 7


// for(var i = 8; i >= 1; i--){
//     for(var j = 8; j > i; j--){
//         document.write("*"+" ")
//     }
//     document.write("<br>")
// }


// for(var i = 1; i < 6; i++){
//     for(var j = 1; j < 6; j++){
//         document.write("*")
//     }
// document.write("<br>")
// }


// for(var i = 10; i > 0; i--){
//     for(var j = i; j > 0; j--){
//         document.write(j)
//     }
//     document.write("<br>")
// }   
      

// for(var i = 0; i <= 5; i++){
//     for(var k = 0; k < 10-i; k++){
//         document.write("&nbsp &nbsp")
//     }
//     for(var j = 0; j < i; j++){
//         document.write("* &nbsp &nbsp")
//     }
//     document.write("<br>")
// }


// for(var i = 5; i > 0; i--){
//     for(var j = i; j > 0; j--){
//         document.write(j)
//     }
//     document.write("<br>")
// }




// for(var i = 0; i <= 65535; i++){
//     document.write(i+")"+String.fromCharCode(i)+"<br>");
// };

