const notes = require('../db/db.json');

module.exports = (app) => {
    //gets the notes
    app.get('/api/notes', (req, res) => res.json(notes))



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