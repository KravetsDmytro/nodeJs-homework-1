const fs= require('fs/promises');

const getAllContact= async() =>{
    const data =await fs.readFile(`${__dirname}/contact.json`, 'utf-8');
    return JSON.parse(data);

}

module.exports={
    getAllContact,
}