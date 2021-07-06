const notes = require('../Develop/db/db.json');

module.exports = (app) => {
    //gets the notes
    app.get('/api/notes', (req, res) => res.json(notes))
    //adds new json objects to notes 
    app.post('/api/notes', (req, res) => {
        notes.push(req.body);
        res.json(true)
    });
};