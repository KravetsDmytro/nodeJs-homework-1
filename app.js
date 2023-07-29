const contacts= require(`${__dirname}/contacts`);

const invokeAction= async({action,id ,email,
phone}) =>{
    switch(action){
        case "read":
            const  allContacts =await contacts.getAllContact();
            return console.log(allContacts)
    }
}




invokeAction({action:'read'})


// const fs=require('fs/promises')


// const readFile = async() => {

//     const buffer= await fs.readFile("./files/text.txt", "utf-8");
//     console.log (buffer)
// }


// readFile()

// const addText= async()=>{
// const result=await fs.appendFile('./files/text.txt', "\nдоданий текст");
// console.log(result)
// }

// addText()

// const repleaceFile = async() => {
// const result= await fs.writeFile('./files/text.txt',  "нове")

// }
// repleaceFile()