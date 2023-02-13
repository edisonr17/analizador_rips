const fs = require('fs');
const dataForge = require('data-forge-fs'); // For readFile/writeFile.

export class ReadFiles{
    constructor(){

    }

    readFile =async (path:string)=>{
      return await fs.readFile(path, 'utf8');
    } 
    

    getDataFromFileForge=async(path:string, columns:string[])=>{
        if(fs.existsSync(path)){
           let data = await dataForge.readFile(path).parseCSV({ columnNames: columns });
           return data.content.values.rows;
        }
        return [];
    }   
  
    // Use fs.readFile() method to read the file
   
      
}