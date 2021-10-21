console.log(global);
let app = setInterval(()=>{
    console.log("It will run for 1 sec")
}, 1000);

// let bbn = setTimeout(()=>{
    // console.log("stop");
    // // clearTimeout(app);
// }, 4000);

// console.log(bbn);

// or
setTimeout(()=>{
    console.log("stop");
    clearTimeout(app);
}, 5000);

console.log(app)
