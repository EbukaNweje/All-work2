// let user1 = prompt("Put in your first number");
// let user2 = prompt("Put in your second number");
// // result = Number(user1) + Number(user2);
// // document.write("Your result is " + result);

// let user3 = prompt("What is your name");
// alert("Welcome " + user3);

// let user4 = prompt(user3 + ", put in your first number");
// let user5 = prompt(
//   "Your first number is " + user4 + ", put in your second number"
// );
// let user6 = Number(user4) + Number(user5);
// document.write(user3 + ", your total sum is " + user6);

// let a = Math.max(34, 244, -45, 67);
// console.log(a);

// let b = Math.min(23, 565, -87);
// console.log(b);

// let c = Math.floor(23.78);
// console.log(c);

// let d = Math.ceil(23.78);
// console.log(d);

// let e = Math.round(45.8 + 78.9);
// console.log(e);

// let scr = "Click here"
// let mark = scr.link("Home.html")
// document.write(mark)

// let f = Math.sqrt(49)
// )
// console.log(g)

// let h = Math.log(2)
// console.log(h)

// let i = Math.sign(-8)
// console.log(i)
// console.log(f)


//  let g = Math.round(Math.random() * 5)
// console.log(g)

// let vow = "aeiousmjh"
// //vow.lenght is used instead of a value like 5 so that when characters are added to the variable vow,it reflects without a change and it works cos .length is a number
// let vow1 = Math.round(Math.random() * vow.length)
// console.log(vow.charAt(vow1))


// let user = document.getElementById("names")
// let userdefine = prompt("Whats is your name?")

// user.innerHTML = "Welcom" + " " + userdefine

// let students = [
//     {
//         Name: "collin",
//         stack: "front-end",
//         age: 45
//     },

//     {
//         Name: "chidera",
//         stack: "word-press",
//         age: 33
//     },
    
//     {
//         Name: "ebuka",
//         stack: "javascript",
//         age: 55
//     },

//     {
//         Name: "sam",
//         stack: "backend",
//         age: 30
//     },
// ]

// let newstu = students.map((data, index) => {
//     console.log(data.name)
//     return{
//         Name: data.Name,
//         age: data.age
//     }
// })

// console.log(newstu)

// let choke = true;

// if(choke){
//     console.log("Welcom")
// }else{
//     console.log("Not Welcom")
// }

// let output = document.getElementById("ans")
// let userName = ["Ebuka", "Godwin", "Collin"]
// let useInput = prompt("Enter Your name")
// let finder = userName.indexOf(useInput)
// if (finder == -1) {
//     console.log("Wrong Input")
//     alert("wrong input")
// }else{
//     alert("Welcome")

//     let age = prompt("Put in your age")
// if(age < 18){
//     alert("Your are not qulify")
// }else{
//     output.innerHTML = `${useInput} you are qulify`
// }

// }

// let number = [2, 4, 5, 6]
// let eze = number.reduce((x, y) =>{
//     return x + y
// }, 5)

// console.log(eze)


// function mutiTwo(a, b){
//     let a = a*2
//     let b = b*2

// };

// console.log(mutiTwo(3,2))


// function ebuka(x, y, z, b) {
//     number.reduce((x, y) =>{
//         let number2 = x + z
//         return number2
//         })
// }

// console.log(ebuka(2, 3, 4, 5,))

// const ebuka= (a,b,c,d) => {
//     let x = Array.from(arguments)
//     return x
// }

// console.log(ebuka(7,3,8,9))


// let z = [1,2,3,4,5,6,7]
// let newx = x.filter((item) =>{
//     return item % 2 !== 0
// })

// console.log("this is the new data => ", newx)

// let student = [
//     {
//         Name: "Ebuka",
//         score: 90
//     }, 

//     {
//         Name: "Miracle",
//         score: 2
//     },

//     {
//         Name: "Colin",
//         score: 89
//     },

//     {
//         Name: "sam",
//         score: 65
//     }
// ]

// let score2 = student.filter((item) =>{
//     console.log(item.Name)

//     return item.score <= 10
// })

// console.log("stundent beleow 20 => ", score2)


// function reduceNum(a,b,c,d){
//     let newArray = Array.from(arguments)

//     let reduceAr= newArray.reduce((x,y) => {
//         return x + y
//     })
//     return reduceAr
// }

// console.log(reduceNum(2, 4, 6, 7))

// function evenReturn(a,b,c,d,e,f,g){
    
//     let newArray = Array.from(arguments)
//     let newList = newArray.filter((item) =>{
//         return item % 2 === 0
//     })

//     return newList
// }

// console.log(2,4,3,5,4,6,7,8)



// function evenReturn(a,b,c,d,e,f,g){
    
//     let newArray = Array.from(arguments)
//     for(let x = 0; x < newArray.length; x++){
//         console.log(newArray[x] ** 2)
//     }

//     let newList = newArray.filter((item) =>{
//         return item % 2 === 0
//     })
    

//     return newArray
// }

// console.log(evenReturn(2,4,3,5,4,6,7,8))


// const newMan = (...arg) => {
//     let newList = Array.filter((item) =>{
//         return item % 2 === 0
//     })

//     return newList
// }

// console.log(newMan(3, 4, 51, 6, 4, 5, 6, 4))

// let codelabNum = [2, 4, 56, 7, 8]
// console.log(codelabNum)

// let incode = [...codelabNum]
// console.log(incode)

// function dnum(incode)



// let arr1 = [3, 5, 6, 8]
// let arr2 = [4, 7, 5, 5]
// let arr3 = arr1.concat(arr2)
// console.log(arr3)


// let studentNames = ["miracle", "peter"]
// let newStudent = ["john", ...studentNames, "Godwin"]
// console.log(newStudent)


// let outPut = document.getElementById("names")

// let html = ""

// let userInput = prompt("what hours is it")

// if(userInput >= 6 && userInput <= 12){
//     html = "Good Morning"
// }else if (userInput >= 13 && userInput <= 18){
//     html = "Good Afternoon"
// }else if (userInput >= 19 && userInput <= 20){
//     html = "Time to Sleep"
// }else if (userInput >= 21 && userInput <= 24){
//     html = "You should be Sleeping"
// }else{
//     html = "Wrong Hour"
// }

// outPut.innerHTML = html

// let outPut = document.getElementById("names")

// let html = ""

// let userInput = prompt("head or tail?")
// let Ebuka = (userInput.toLowerCase() === "head") ? 1 : 0
// let Computer = Math.floor(Math.random() * 2)
// console.log(Computer)

// if(Ebuka === Computer){
//     html = "Your are Correct"
// }else{
//     html = "You are Wrong"
// }
// outPut.innerHTML = html


// let d = new Date()
// console.log(d)
// console.log(d.getFullYear())
// console.log(d.getMonth())
// console.log(d.getSeconds())
// console.log(d.getTime())

// let output = document.getElementById("names")
// output.style.background = "black"
// output.style.color = "white"
// output.style.width = "300px"
// output.style.height = "400px"

// const addName = () =>{
//     let userInput = prompt("What is your name")
//     let x = document.getElementById("somename")
//     x.innerHTML += userInput + "<br>"
// }

// const changeColor = () =>{
//     let a = prompt("What color you want")
//     output.style.background = a
// }

// let Color2 = ["green", "blue", "black", "purple", "red", "indogo", "pink"]
// const changeColor2 = () =>{
//     let number = Math.floor(Math.random() * Color2.length)
//     output.style.background = Color2[number]
// }

// const clickOut = () =>{
//     let outPut1 = document.getElementById("display")
//     let outPut = document.getElementById("userInput").value
//     outPut1.innerHTML += outPut + "<br>"
// }

// const clickMe = () =>{
//     let next = document.getElementById("Rus")
//     let Ans2 = document.getElementById("FirstNum").value
//     let Ans3 = document.getElementById("SecondNum").value
//     next.innerHTML += `${Ans2} + ${Ans3} = ${Number(Ans2)  + Number(Ans3)}` + "<br>"
// }

// const clickMe1 = () =>{
//     let next1 = document.getElementById("Rus")
//     let Ans21 = document.getElementById("FirstNum").value
//     let Ans31 = document.getElementById("SecondNum").value
//     next1.innerHTML += `${Ans21} - ${Ans31} = ${Number(Ans21)  - Number(Ans31)}` + "<br>"
// }

// const clickMe2 = () =>{
//     let next11 = document.getElementById("Rus")
//     let Ans211 = document.getElementById("FirstNum").value
//     let Ans311 = document.getElementById("SecondNum").value
//     next11.innerHTML += `${Ans211} * ${Ans311} = ${Number(Ans211)*Number(Ans311)}` + "<br>"
// }
// const clickMe3 = () =>{
//     let next111 = document.getElementById("Rus")
//     let Ans2111 = document.getElementById("FirstNum").value
//     let Ans3111 = document.getElementById("SecondNum").value
//     next111.innerHTML += `${Ans2111} / ${Ans3111} = ${Number(Ans2111)/Number(Ans3111)}` + "<br>"
// }



// let output = document.getElementById("Rus")
// let num1 = document.getElementById("FirstNum")
// let num2 = document.getElementById("SecondNum")

// const AddMe = ()=>{
//     let a = num1.value + " " + "+" + " " + num2.value
//     let b = Number(num1.value) + Number(num2.value)
//     outputhtml(a, b)
// }

// const outputhtml = (a, b) =>{
//     output.innerHTML += a + "=" + b + "<br>"
// }

// let output = document.getElementById("change")
// output.style.fontSize = "100px"
// output.style.textAlign = "center"
// let a = ["red", "blue", "green", "yellow"]

// const changeColor = () =>{
//     let output1 = document.getElementById("color").value
//     if(
//         output1 = Math.floor(Math.random() * a.length) != output ?  output.style.color = [output1] : output.style.color = "black"
//     )
//     output.style.color = [output1]
// }


// let request = document.getElementById("Chat")
// let html= " "
// let q = prompt("ask me anything?")
// let a = Math.floor(Math.random() * 6)
// switch(a){
//     case 0:
//         html = "get out of here"
//         break;
//         case 1:
//             html = "you are not a human"
//             break;
//             case 2:
//                 html = "do your research"
//                 break;
//                 case 3:
//                     html = "you are not up to 18"
//                     break;
//                     case 4:
//                         html = "probably not"
//                     break;
//                     default:
//                         html = "i don'know about that"
                        
// }

// request.innerHTML = "you ask me " + q + "<br>" + "i think that " + html



// let request = document.getElementById("Chat")
// // let q = prompt(`do your chose "Rock", "Paper", "Scissor"`)
// let win = false
// let computer = Math.random();
// console.log(computer)

// if(computer < 0.36){
//     computer = "Rock"
// } else if (computer < 0.67){
//     computer = "Paper"
// } else{
//     computer = "Scissor"
// }
// console.log(computer)

// let request = document.getElementById("Chat")
// let html= " "
// let trigger = ["How are you", "Hello"]
//  let q = prompt("What on your mind")
//  let a = Math.floor(Math.random() * trigger.length)
 
//  switch(a){
//      case 0:
//          html = trigger[a]
//  }

//  request.innerHTML = "you ask me " + q + "<br>" + "i think that " + html


// let x = 0;

// do{
//     console.log("hello devs")
//     x++

// }while(x < 10)

// let output = document.getElementById("Chat")
// let input = prompt("how many times do you want me to loop?")
// let y = 0;
// do{
//     y++ 
//     if(y % 2 === 0){
//         output.innerHTML += "value y= " + y + "<br>";
//     }
    
// }while (y < Number(input))

// let p = 0

// while(p < 10){
//     console.log("hello guys")
//     p++
// }

// let output = document.getElementById("Chat")
// let Password = "Ebuka"
// let Put = prompt("Enter Your Password")

// while(Put !== Password){
//     Put = prompt("guess aging")
// }

// output.innerHTML += "correct password"

// let output = document.getElementById("Chat")
// for (let x = 0; x < 10; x++) {
//     output.innerHTML += "value of x is = " + x + "<br>"
// }

// let nums = [3, 7, 59, 12, 45]
// let newnums = []
// for(let x = 0; x <nums.length; x++){
//     newnums.push(nums[x] * 2)
// }

// console.log(newnums)

var quantity = "25";
    var number = 6;
    var pressure;
    var temperature = null;

     console.log(quantity += quantity); 
    console.log( (7+5) / number + 2 ); 
    console.log(pressure); 
    console.log(temperature); 
    console.log(typeof pressure); 
    console.log(typeof temperature);


      