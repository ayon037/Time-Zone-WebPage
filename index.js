//1. Ways to print JS

//console.log("Hello World!");
//document.write("This is document write")

//alert("me");

//document.getElementByTagname('h1') => Returns an array
//document.getElementByTagname('h1')[0].style.background = "red"
//document.getElementByTagname('h1')[0].style.visibility = "hidden"
//document.getElementByTagname('h1')[0].style.display = "none"
//document.getElementByTagname('h1')[0].style.fontSize = "20px"

//2. Javascript Console API

//console.warn("Stop!");
//console.log("Hello World!", 4 + 8, "Another log");
//console.error("This is an error!");
//console.clear();
//console.assert(4 == 6 - 2);

//3. Javascript Variables
// Containers to store data values

// var number=34
// var number2=56
// console.log(number+number2)

//4. Data Types in JS
//Numbers

// var num1=455;
// var num2=56.25;

//Strings
// var str1="This is a string";
// var str2='This is a string';

//Objects
// var marks = {
//     Ayon: 3.36,
//     Nurshat: 3.57,
//     Tanvin: 3.80,
//     Mahdi: 3.50
// }

//Booleans
// var a=true;
// var b=false;
// console.log(a,b);


// var und1=undefined;
// var und2;
// console.log(und1);
// console.log(und2);

// var n=null;
// console.log(n);


/*
At a very high level, there're two types of data types in JS
1. Primitive: undefined,null,number,string,boolean,symbol
2. Reference: Arrays and Objects
*/

// var arr=[1,2,3,4,5,"string"];
// console.log(arr);

//5. Operators in JS

//Arithmatic
// var a=108;
// var b=36;
// console.log("The value of a+b is = ",a+b);
// console.log("The value of a+b is = ",a-b);
// console.log("The value of a+b is = ",a*b);
// console.log("The value of a+b is = ",a/b);

//Assignment 
// var c=b;
// c-=2;
// c+=2;
// c*=2;
// c/=2;
// console.log(c);

//Comparison
// var x=34;
// var y=56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);

//Logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

//Logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

//Logical NOT
// console.log(!false);
// console.log(!true);

//6. Functions in JS

//Dry Principle = Don't Repeat Yourself
// function avg(a,b){
//     return (a+b)/2;
// }

// c1=avg(4,6);
// c2=avg(21/10);
// console.log(c,d);

//7. Conditionals is JS

// var age = 16;
// if(age>16)
// {
//     console.log('You are not a kid.');
// }
// else if(age>8 && age<=16)
// {
//     console.log("You are on the way to be adult");
// }
// else
// {
//     console.log('You are a kid.');
// }


//8. Loops in JS

// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// let j=0;
// const a = 0;
//a++; Error!! ==> It's a constant, can't be modified
//a=a+1; Error!! ==> It's a constant, can't be modified

// let k=0;
// while(k<arr.length)
// {
//     console.log(arr[k]);
//     k++;
// }

// let p=0;
// do{
//     console.log(arr[p]);
//     p++;
// }while(p<arr.length);


//9. Break and Continue Statement in JS

// var arr=[10,20,30,40,50,60];
// for(var i=0;i<arr.length;i++)
// {
//     if(i==2)
//     {
//         //continue;
//         continue;
//     }
//     console.log(arr[i]);
// }


//10. Array Methods in JS

// let myArr = ["Fan","Camera",34,null];
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.push("Ayon");
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// myArr.unshift("Ayon");
// console.log(myArr);
// const newLen = console.log(myArr.unshift("Ayon"));
// console.log(newLen);
// myArr.toString();
// myArr.sort();
// d=[2,5,41,1,8];
// d.sort();


//11. String Methods in Js

// let myLovelyString = "Ayon is a good boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good")); // 1st occurrence
// console.log(myLovelyString.lastIndexOf("good")); // last occurrence
// console.log(myLovelyString.slice(1,3));
// myLovelyString.replace("good","boka"); // Just replaces 1st occurrence
// console.log(myLovelyString);

//12. Date in JS

// let myData = new DataTransfer();
// console.log(myData);
// console.log(myData.getTime());
// console.log(myData.getFullYear());
// console.log(myData.getDay());
// console.log(myData.getMinutes());
// console.log(myData.getHour());


// 13. DOM Manipulation (Document Object Manipulation)

// document.location
// document.URL
// document.scripts
// document.links
// document.images
// document.domain
// let element=document.getElementById('click');
// console.log(element);
// let elementClass=document.getElementsByClassName('container');
// console.log(elementClass);
// //elementClass[0].style.background="yellow";
// elementClass[0].classList.add("bg-Primary");
// elementClass[0].classList.add("text-success");
// elementClass[0].classList.remove("text-success");
// console.log(elementClass[0].innerHTML);
// console.log(elementClass[0].innerText);
// document.getElementById('click').click();
// document.getElementById('click').style.border='blue';
// document.getElementById('click').style.border='2px solid blue';
// tn=getElementsByTagName('button');
// console.log(tn);
// let dv=getElementsByTagName('div');
// console.log(dv);
// let createdElement=document.createElement('p');
// createdElement.innerText="This is a created Paragraph."
// dv[0].appendChild(createdElement);

// let a=document.getElementsByTagName('div');
// console.log(a);
// let createdElement = document.createElement('p');
// createdElement.innerText='This is a created paragraph';
// a[0].appendChild(createdElement);
// createdElement2=document.createElement('b');
// createdElement2.innerText="This is created bold.";
// a[0].replaceChild(createdElement2,createdElement);
// removeChild(element) => removes an element

// 14. Slecting Using Query

// sel = document.querySelector('.container');
// console.log(sel);
// sel=document.querySelectorAll('.container');
// console.log(sel);


// 15. Events in JS

// function clicked(){
//     console.log('The button was clicked');
// }

// window.onload=function(){
//     console.log('The page was loaded.');
// }

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>";
//     console.log("Clicked the button!");
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container!");
// })


// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out container!");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>";

// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log('Mouse up when clicked on container!');
// })

// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log('Mouse down when clicked on container!');
// })


// 16. Set Timeout and Set Interval

// Arrow Functions
// function sum{
//     return 5;
// }

// sum=(a,b)=>{
//     return a+b;
// }

// logKorba=()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b>Bold Now!</b>";
//     console.log("Log Korchi");
// }

// setTimeout(logKorba,2000); // clearTimeout to clear
// clr=setInterval(logKorba,2000); // clearInterval to clear


// 17. Local Storage in JS

// localStorage.setItem('name','Ayon');
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear()


// 18. JSON

// obj = {name:"Ayon",roll:37,again_object:{Dept:"CSE",CGPA:3.36,a:{this:'tha"t'}}};
// jso=JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed=JSON.parse(`{"name":"Ayon","roll":37,"again_object":{"Dept":"CSE","CGPA":3.36}}`);
// console.log(parsed);


// 19. JS Versions

// Backticks => Template Literals
// a=34
// console.log(`This is my number ${a}`);