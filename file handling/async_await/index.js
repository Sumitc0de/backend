// const fs = require('fs').promises  // common js method to access the promisses in fs

// import method to get fs promisses
// import { readFile, writeFile, appendFile, unlink, rename } from "fs/promises";
import { writeFile } from "fs";
import * as fs from "fs/promises";

let content = "Using fs.promisses to write file"
const run = async () =>{

    try{

        // write
        await fs.writeFile("example.txt",content);

        // read
        const data = await fs.readFile("example.txt","utf8");
        console.log(data);

        //append
        await fs.appendFile("example.txt","(\nThis text added using append method)");

        //rename
        await fs.rename("example.txt","demo.txt",(err)=>{
            if(err) throw err
            console.log("File renamed successfully!");
        });

    }catch(err){
        console.log(err);
    }

}

run();