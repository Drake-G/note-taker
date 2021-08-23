const notes = require('../db/db.json');

module.exports = (app) => {
    //gets the notes
    app.get('/api/notes', (req, res) => res.json(notes))

    //get one note by the ID
    app.get('/api/notes/:id', (req, res) => {
        const singleNote = findById(req.params.findById, notes);
        res.json(singleNote)
    })

    //adds new json objects to notes 
    app.post('/api/notes', (req, res) => {
        notes.push(req.body);
        res.json(true)
    });


    //clears the notes
    app.post('/api/clear', (req, res) => {
        notes.length = 0;
        res.json({ ok: true });
    })
};