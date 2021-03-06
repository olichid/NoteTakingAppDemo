module.exports = (app) => {
    const notes = require('../controllers/note.controllers');

    // Create a new note
    app.post('/notes', notes.create);

    // Retrieve all notes
    app.get('/notes', notes.findAll);

    // Retrieve a single note with note id
    app.get('/notes/:noteId', notes.findOne);

    // Update a note with noteId
    app.post('/notes/:noteId', notes.update);

    // Delete a note with noteId
    app.delete('/notes/:noteId', notes.delete);
}