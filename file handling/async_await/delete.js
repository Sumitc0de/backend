import * as fs from "fs/promises"

const run = async () =>{
    try{

        console.log("start of program");   // it will run at start of the program
        await fs.writeFile("delete.txt","Hello world");  // creating and writing a file 
        console.log("File created successfuly")
       
        
        const data = await fs.readFile("delete.txt","utf8");   // reading a file
        console.log(data);
        
        await fs.unlink("delete.txt");
        console.log("File deleted successfuly")


        console.log("End of program");

    }catch(err){
        console.log(err);
    }
}

run();