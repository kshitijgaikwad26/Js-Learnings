// let a = prompt("What is your age");
// aa = Number.parseInt(a);
// console.log(typeof a);
// if (a > 0) {
//   alert("Valid age");
// } else {
//   alert("Invalid age");
// }

// const expr = 'Papaya';
// switch (expr) {
//   case 'Oranges':
//     console.log("You will get oranges");
//     break;
  
//     case 'Mangoes':
//       case 'Apples':
//       console.log("You will get Mangoes and apple");
//       break;
//       default:
//         console.log("Buy your own food");
// }

// let sum = 0;
// let n =  prompt("Enter the value of n");
// n = Number.parseInt(n)
// for(let i =0;i<n;i++){
//   sum += (i+1),"+"
// }
// console.log(" Sum of first " + n + " natural no is " + sum );

// let marks = {
//   harry: 90,
//   kshitij: 80,
//   anish: 70,
//   rajat: 60
// }
// //For loops
// for(let i = 0; i<Object.keys(marks).length; i++){
//   // console.log(" The marks are " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)]) ;
// }

// // For in loops
// for(let keys in marks){
//   console.log(" The marks of " + keys + " are " + marks[keys]) ;
// }

// Problem 3 

// let cn = 4;
// let i;
// while(i != 4){
//   console.log("Try again you number is wrong");
//   i = prompt("Enter a number")
  
  
// }
// console.log("You have entered the correct number ");

//Problem 4 

// const mean = (a, b, c, d ) => {
//   return(a + b + c + d) /4
// }
// console.log(mean(6, 8, 4, 8));

// console.log("har\"".length);

// let name = " Kshitij ";


// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.toLowerCase());
// console.log(name.slice(2,4));
// console.log(name.slice(2));
// console.log(name.replace("Kshi" , "Ris"));


//  let friend = " Swamini ";
//  console.log(name.concat("is a friend of " , friend , "okay"));

//  let friend2 = "  Nikhil    "
//  console.log(friend2.trim());

// let name1 = "Anish";
// for (let i = 0; i< name1.length; i++) {
//      console.log(name1[i]);
//     }

// let name = "Kshit'\nij"
// console.log(name);

// let str2 = "Please give Rs 1000";
// let amount = Number.parseInt(str2.slice(15));
// console.log(amount);
// console.log(typeof amount);

// sTRINGS 

// Array methods 


// let num = [1,2,3,4,5];
// let b = num.toString();
// console.log(b, typeof b);

// let c = num.join(" and ");
// console.log(c , typeof c);

// pop return the popped element
// let r = num.pop();   
// console.log(num , r);

// push return the new array length
//  let p = num.push(66);  
//  console.log(num , p);

// let r = num.shift();  shift remove the first element in the array.
// console.log(num , r);

// let r = num.unshift(); unshift add the element to the beginning in the array. 
// console.log(num , r);  

// let num = [1,2,3,4,5,6,7,8,9];
// let sum = [11,22,33,44,55];
// let sum_more = [66,77,88,99,34,56];

// console.log(num.length);  
// delete num[0];              
// console.log(num.length);

// Concat array
// let newArray = num.concat(sum,sum_more)
// console.log(newArray);
// console.log(num);
// console.log(sum);
// console.log(sum_more);

// Sort array and compare
// let compare = (a,b)=>{
//     return a-b;
// }
// // sort array
//  let num = [1,243,3,40,50,60,72,8,9];
//  num.sort(compare);
// //  reverse the array
//  num.reverse();    
//  console.log(num);

// // Splice
// let num = [1,243,3,40,50,60,72,8,9];
// let deletedValues = num.splice(2 ,4 ,1021,1022,1023,1024,1025,1026);
// console.log(num);
// console.log(deletedValues);

// Slice
// let num = [1,243,3,40,50,60,72,8,9];
// let newArray = num.slice(3,5);
// console.log(newArray);


// for loop in Array


// for (let i = 0; i < array.length; i++) {
    //     console.log(num[i]);
    // }
   

    // For Each loop 

//  

// let num = [1,4,6,7,8];
//   num.forEach((i)=>{
//     console.log(i * i);
//   })


// // Array.from  loop 

// let name = "Kshitij";
// let arr = Array.from(name);
// console.log(arr);

// for.of (loop)

// let num = [1,4,6,7,8,9,10,32];
// for(let i of num){
//   console.log(i);
// }

// // for..in loop

// let num = [1,4,6,7,8,9,10,32];
// for(let i in num){
//   console.log(i);
// }


// Array Map Method  (Returns an array)

// let arr =[45,67,21];
// console.log(arr);

// let a =arr.map((value,index, array)=> {
// console.log(value, index, array);
//   return value +index;
// })
// console.log(a);

// Array Filter Method  (Returns an array)

//  let arr2 = [23,55,77,43,0,12,5,8];
//  console.log(arr2);
//  let a2 = arr2.filter((a)=>{
//   return a<10;
//  })
//  console.log(a2);
 
// Array Reduce method   (Its return a value)

// let arr3 = [1,2,3,4,5,6,1];
// console.log(arr3);
// let a3 =arr3.reduce((a1,a2) =>{
//   return a1 + a2;
// })

// console.log(a3);


// let arr3 = [1,2,3,4,5,6,1];
// const reduce_func = (b1,b2) =>{
//   return b1 + b2
// }
// let a4 = arr3.reduce(reduce_func)
//   console.log(a4);


// Array Practise set

// Problem 1 

// let arr = [1,2,3,4,5,6,7];
// let a = prompt("Enter a number");
// a =Number.parseInt(a);
// arr.push(a)
// console.log(arr);

// Problem 2

// let arr = [1,2,3,4,6,7,10];
// let a;
// do{
//  a= prompt("Enter a number");
//   a = Number.parseInt(a);
//   arr.push(a);
// }while(a !=0){
//   console.log(arr);
// }

// // Problem 3

// let arr= [12,44,55,10,20,30,55];
// // console.log(arr);
// let a2= arr.filter((a)=>{
//   return a%10 == 0;
// })
// console.log(a2);

// Problem 4

// let arr= [1,4,5,10,21,6,55];
// // console.log(arr);
// let a2= arr.map((a)=>{
//   return a * a;
// })
// console.log(a2);

// Problem 5

// let arr=[1,2,3,4,5,6];
// console.log(arr);
// let a3 = arr.reduce((a1,a2)=>{
//   return a1 * a2
// })

// console.log(a3);

// Guess The Number Exercise  

// let number = Math.floor(Math.random() * 100);
// console.log(number);
// let num = prompt("Enter any number");
// console.log(num);
// let chances = 100-1;
// if(num === number){
//   console.log("You have guessed the correct number");
// }
// else {
//   console.log("You have guessed the incorrect number");
//   chances-=1;
//   console.log(100 - chances, number);
// }


// console.log("console");
// console.info("info");
// console.warn("warn");
// console.error("err");
// console.assert("err" !=false) 
// console.assert("err"== false)


// Problem statement 

// let runAgain = true;
// const canDrive =(age) =>{
//   return age>=18 ? true : false
// }

// while(runAgain){
//   let age = prompt("Enter your age");
// age = Number.parseInt(age)
// if(age<0){
//   console.error("Please enter a valid age");
//   break;
// }

// if(canDrive(age)){
//   alert("You can drive");
// }else{
//   alert("You cannnot drive");
// }
// runAgain = confirm("Do you want to play again?");
// }

// Problem 5 

// let number=prompt("Enter your number");
// number = Number.parseInt(number);  

// if(number>4){
//   location.href = "https://google.com"
// }

// let color = prompt("Enter the page background color");
// document.body.style.background = color


// console.log(document.body.firstChild);
// a = document.body.firstChild

// console.log(a.parentNode);
// console.log(a.parentElement);
// console.log(a.firstChild.nextSibling);

// let ctitle =document.getElementById("firstcardtitle")
// ctitle.style.color="green"

// let ctitles = document.querySelectorAll(".card-title")
// ctitle[0].style.color="red"
// ctitle[1].style.color="yellow"
// ctitle[2].style.color="green"
// console.log(ctitle);

// document.querySelector(".this").style.color="red"
// document.querySelector(".this").style.background="clay"

// console.log(document.getElementsByClassName(".a"));
// console.log(document.getElementsByTagName("a"));
// console.log(document.getElementsByName("search"));


// let id1 = document.getElementById("id1");
// let sp1 = document.getElementById("sp1");
// console.log(id1);
// console.log(id1.matches(".class"));
// console.log(id2.matches(".box"));
// console.log(sp1.closest(".box"));

// console.log(id1.contains(sp1));
// console.log(sp1.contains(id1));

// Practise set chapter 7

// // Snake,Water,Gun  game 

// let user = prompt("Enter S, W and G")
// let cpuI = Math.floor(Math.random() * 3);
// let cpu = ["S", "W", "G"][cpuI]

// const match =(cpu, user) =>{
//   if(cpu == user){
//     return "Nobody";
//   }
//   else if(cpu ==="S" && user === "W"){
//     return cpu;
//   }
//   else if(cpu ==="S" && user === "G"){
//     return user;
//   }
//   else if(cpu ==="G" && user === "W"){
//     return user;
//   }
//   else if(cpu ==="G" && user === "S"){
//     return cpu;
//   }     
  
//   else if(cpu ==="W" && user === "S"){
//     return user;
//   }
  
//   else if(cpu ==="W" && user === "G"){
//     return cpu;
//   }
// }
// let result = match(cpu, user)
// document.write(`CPU:${cpu} and USER:${user} \n The winner is: ${result.toUpperCase()}`);

// let a =document.getElementsByTagName('div')[0]

// a.innerHTML=a.innerHTML + '<h1>Hello Everyone!</h1>';

// let div = document.createElement('div');
// div.innerHTML='<h1>Hello Everyone!</h1>';
// a.appendChild(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
// a.replaceWith(div);

// first.insertAdjacentHTML('beforebegin', '<div class ="test">beforebegin</div>');
// first.insertAdjacentHTML('beforeend', '<div class ="test">beforeend</div>');
// first.insertAdjacentHTML('afterbegin', '<div class ="test">afterbegin</div>');
// first.insertAdjacentHTML('afterend', '<div class ="test">afterend</div>');

// first.className="text-black red"



// Set Interval and setTimeout

document.write("Hello");

// const sum =(a,b,c) =>{
//     console.log(" Yes I am running " + (a+b+c) );
//       a + b + c;
// }

// setTimeout(sum, 1000 , 2, 3, 9)  


// setInterval(function() {
//    alert("Set Interval") 
// }, 3000);

const sums =(a,b,c) =>{
    console.log("Yes I am set interval" + (a,b,c));
    a+b+c;
}

setInterval(sums, 2000, 1,2,3)


// let a = setTimeout(function(){
//     alert("I am inside of settimeout")
// },3000)

// let b = prompt("Do you want to run the settimeout")
// if("n" == b){
//     clearTimeout(a);
// }
// console.log(a);