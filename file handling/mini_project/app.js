import { createNotes, readNotes, searchNote, updateNote } from './index.js';

// Create note
await createNotes("Learning Node.js fs module");

// Show all notes
await readNotes();

// Search note by ID
await searchNote(1756835126009);

// Update note
await updateNote(1756835126009, "Updated content here");

await readNotes();