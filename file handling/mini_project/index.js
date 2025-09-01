import * as fs from 'fs/promises'

let fileName = 'demo.json';

async function loadNotes() {
    try{
        const data = await fs.readFile(fileName,"utf8");
        return JSON.parse(data);
    }catch(err){
        return [];
        console.log(err);
    }
}

async function saveNotes(notes) {
    await fs.writeFile(fileName,JSON.stringify(notes,null,2));
}

// create notes

export async function createNotes(content) {
    try{
        const note = await loadNotes();
        const newNotes = {id:Date.now() ,content:content}
        note.push(newNotes)
        await saveNotes(note)
    }catch(err){
        console.log("Note not created!");
    }
}

// read notes
export async function readNotes() {
    const data = await loadNotes();
    data.forEach((note) => {
        console.log(note)
    });
}