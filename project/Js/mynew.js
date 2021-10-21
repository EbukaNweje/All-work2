// let x = ["red", "pink"]
// let user = prompt("enter")
// let finder = x.indexOf(user)
// let rrr = (finder > -1) ? x.splice(finder, 1) : 
// alert(x)


let miracle = {
    "eye":2,
    "leg":2,
    "complextion": "fair",
    "beautiRate": "100%"
}

miracle.eye = 4

console.log(miracle.eye)
console.log(miracle["beautiRate"])

let anyObj ={
    "firstName": "john",
    "seconName": "peter",
    "score": [34, 566, 6, 9],

    "fullname": function () {
        return this.firstName + " " + this.seconName
    }
}

console.log9(anyObj.score[1])

console.log(anyObj.fullname())

let { firstName, seconName, score } = anyObj
console.log(firstName, score)

let x = [3, 6, 7, 4, 9]
x.map(x => console.log(x * 2))

// for (let i in x){
// console.log(x[i])
//conosole.log(i)
//}