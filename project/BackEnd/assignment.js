const fs = require("fs")

if (!fs.existsSync("./code")){
    fs.mkdir("./code",(erro)=>{

        if(erro){
            console.log("there was an error",erro)
    }else{
        console.log("it ran successful")
        }
    })
}else{
    const old = "./code"
    const now=(c)=>{
    const help = Math.floor(Math.random() * 10)
        return c+help
    }
    console.log(now(old))

    fs.rename(old,now(old),(erro)=>{
        if (erro){
            console.log("error occured",error);
        }else{
            console.log("completed")
        }
    })
}