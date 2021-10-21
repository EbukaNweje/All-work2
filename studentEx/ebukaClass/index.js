let output = document.getElementById("Array")
let Name = ["Ebuka", "Confidence", "Favour"]

for(let x = 0; x < Name.length; x++){
    output.innerHTML += Name[x] + "<br>"
}

for(let x = Name.length -1; x >= 0; x--){
    output.innerHTML += Name[x] + "<br>"
}

let x = 0