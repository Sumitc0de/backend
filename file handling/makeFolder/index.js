import * as fs from 'fs/promises'

async function createFolder() {
    
    await fs.mkdir("./myFolder");
    console.log("Folder created")
    await fs.writeFile("./myFolder/demo.txt","Hello World");
    console.log("File created inside myFolder");
}

createFolder()