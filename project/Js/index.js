let fname = "miracle"
let sname = "KUOJANARE"

console.log(fname.toUpperCase())
console.log(sname.toLowerCase())

let y = "this is javascript project"
//returns number of characters
console.log(y.length)

let allname = fname
console.log(allname)

//used to join two or more variables
let allnm = sname.concat(" ", fname)
console.log(sname + " " + fname)
console.log(allnm)

let sen = "The man said \"all students should go home\"."
let se ="\"The man said \"all students should go home\"\"."

console.log(sen)
console.log(se)

let a = "java"
let b = "script"

console.log("this is" + " " + a + b + " " + "class")
console.log(`this is ${a}${b} class`)

// replacement of a text
let news = "i am a girl"
console.log(news)
let word = news.replace("girl", "man")
console.log(word)

// gives out specified character
let train = "marketing"
console.log(train)
let at = train.charAt(4)
console.log(at)

// endpoint specifies a string value and if anything other than it is InputDeviceInfo,it gives a false
let chi = "endpoint"
console.log(chi.endsWith("Endpoint"))

let str = "hello world"
console.log(str.substr(2, 5))

let wrt = "juice"
console.log(wrt.slice(1,3))