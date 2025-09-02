import * as fs from 'fs/promises';

let fileName = 'demo.json';

async function loadNotes() {
    try {
        const data = await fs.readFile(fileName, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.log(err);
        return [];
    }
}

async function saveNotes(notes) {
    await fs.writeFile(fileName, JSON.stringify(notes, null, 2));
}

// Create notes
export async function createNotes(content) {
    try {
        const notes = await loadNotes();
        const newNote = { id: Date.now(), content };
        notes.push(newNote);
        await saveNotes(notes);
        console.log("Note created:", newNote);
    } catch (err) {
        console.log("Note not created!", err);
    }
}

// Read notes
export async function readNotes() {
    const data = await loadNotes();
    if (data.length === 0) {
        console.log("No notes found.");
    } else {
        data.forEach((note) => console.log(note));
    }
}

// Search note by ID
export async function searchNote(id) {
    try {
        const notes = await loadNotes();
        const found = notes.find((item) => item.id === id);
        if (found) {
            console.log("Found:", found);
        } else {
            console.log("Note not found.");
        }
    } catch (err) {
        console.log(err);
    }
}

// Update note by ID
export async function updateNote(id, content) {
    try {
        const notes = await loadNotes();
        let updated = false;

        notes.forEach((item) => {
            if (item.id === id) {
                item.content = content;
                updated = true;
            }
        });

        if (updated) {
            await saveNotes(notes);
            console.log("Note updated!");
        } else {
            console.log("Note not found.");
        }
    } catch (err) {
        console.log(err);
    }
}
