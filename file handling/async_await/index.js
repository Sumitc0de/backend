// const fs = require('fs').promises  // common js method to access the promisses in fs

// import method to get fs promisses
// import { readFile, writeFile, appendFile, unlink, rename } from "fs/promises";
// import { writeFile } from "fs";
import { constants } from "fs";
import * as fs from "fs/promises";

let content = "Using fs.promisses to write file"
const run = async () => {

    try {

        // write
        await fs.writeFile("example.txt", content);

        // read
        const data = await fs.readFile("example.txt", "utf8");
        console.log(data);

        //append
        await fs.appendFile("example.txt", "(\nThis text added using append method)");

        //check file exists or not
        await fs.access("example.txt",constants.F_OK);
        await fs.rename("example.txt","demo.txt");
        console.log("File exists and renamed to demo.txt");

       const fileinfo = await fs.stat("demo.txt");
    //    console.log(fileinfo);

    } catch (err) {
        console.log(err);
    }

}

run();