import fs from 'fs'

console.log("Start of program");      // run first 

fs.readFile("file1.txt","utf8", (err,data1)=>{   // run asynchronously 
    if(err) throw err;

    fs.readFile("file2.txt", "utf8", (err,data2)=>{   
        if(err) throw err;

        fs.writeFile("res.txt", data1 + "\n" + data2, (err)=>{    // writing the file after reading file1 and file2
            if(err) throw err

            console.log("Work Done");
        })
    })
})

console.log("End of program");   // run second 