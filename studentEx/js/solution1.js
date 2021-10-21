let Welcome = "This is solution1.js"
console.log(Welcome)

let output = document.getElementById("student_message")
let Name = "Ebuka"
let age = 23

output.innerHTML += `Hi, my name is ${Name}, i'm ${age} years old and I'm learning Javascript `

let output2 = document.getElementById("result")
let Num1 = document.getElementById("num_1").innerHTML
let Num2 = document.getElementById("num_2").innerHTML
let Num3 = (Number(Num1) + Number(Num2)) / 2
output2.innerHTML += Num3.toFixed(2)



let phone1 = "988866552";
let phone2 = "99087612366";
let phone3 = 876543123;

if(phone1.length === 9){
    console.log(true)
}else{
    console.log(false)
}
if(phone2.length === 9){
    console.log(true)
}else{
    console.log(false)
}
if(String(phone3).length === 9){
    console.log(true)
}else{
    console.log(false)
}

console.log(32 ** 6)