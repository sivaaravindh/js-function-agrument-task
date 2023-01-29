// var findSquare=function(num){
//     return num*num;
// }
// console.log(findSquare(2));
// console.log(findSquare(4));
// console.log(findSquare(8));


// function reverseNum (num){
//     var reverse=0;

//     while(num!=0) {
//         var b=num%10;
//         num=(num-b)/10;
//         reverse=reverse*10+b;
//     }

//     return document.write(reverse);
// }

// reverseNum(145);



// function add(a, b) {
//     return a + b;
// }


// let number1 = parseInt(prompt("Enter first number: "));
// let number2 = parseInt(prompt("Enter second number: "));

// // calling function
// let result = add(number1,number2);

// // display the result
// console.log("The sum is " + result);

// var nam1=prompt("enter the name");
// var nam2=prompt("enter the name");

// function cheakCount(str){
// var val=0;
//     for(let i=0; i<str.length; i++){
//         if(str[i]== "a"||str[i]== "e" ||str[i]== "i"|| str[i]== "o" ||str[i]== "u" ){

//             ++val;
//         }
        
//     }

//     return val;
// }

// function check() {
//     var Unam1=cheakCount(nam1);
//     var Unam2=cheakCount(nam2);

//     if(Unam1>Unam2){
//         document.write("this is most vowels is present"+ Unam1)
//     }
//     else{
//         document.write("this is most vowels is present"+ Unam2)
//     }
// }


// check() 

// function squared(num) {
//     return num * num;
//   }
  
//   function cubed(num) {
//     return num * num * num;
//   }
  
//   function factorial(num) {
//     if (num < 0) {
//         return undefined
//     }
//     else{
//     if(num === 0){
//          return 1
//     }
//     };
//     let x = num - 1;
//     while (x > 1) {
//       num *= x;
//       x--;
//     }
//     return console.log( num);
//   }

// factorial(5);