// let a = prompt("what is your first number")
// let b = prompt("what is your other number")
// let c = (a > b) ? "first number is bigger" : "second number is bigger"
// alert(c)

// let name = "Godwin peace john"
// let newname = name.split(" ")
// let ass= name.split("")
// console.log(newname)

// let b = "ada kelechi michael"
// let d = b.split(" ")
// let e = prompt("what do u want to delete")
// let c = d.indexOf(e)
// console.log(c)

let name = "godwin mimi sam mike";
let newnames = name.split(" ")
console.log(newnames)
let names = prompt("what name do u want to delete")
let fnames = newnames.indexOf(names)
// the first console.log shows deleted index
// when u input a name that isnt on the List, it gets an index of -1 and so deleted the last value in the array
console.log(newnames.splice(fnames, 1))
// this shows the remaining values
console.log(newnames)
if (names === "godwin", "mimi", "sam", "mike") {
    alert("this name has been deleted")
}
else {
      alert("this name is not in the list")
}


// let c = prompt("put in your names")
// let d = c.indexOf(c)
// document.write(c.splice(d, 2))
// document.write(d)

// let student = ["john", 34, "okon", "adaku", null, false]
// console.log(student[2])

// let [firstvalue, secondvalue] = student
// console.log(firstvalue, secondvalue)
// let [firstvalue, , secondvalue] = student
// console.log(firstvalue, secondvalue)
// let [ , , firstvalue, secondvalue] = student
// console.log(firstvalue, secondvalue)

// const name = ["mimi", "mark"]
// for(const item of name)
// console.log(name)

