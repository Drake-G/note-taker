const path = require('path');

module.exports = (app) => {
    //route to the notes page
    app.get('/notes', (req, res) => {
        res.sendFile(pathjoin(__dirname, '../Develop/public.notes.html'));
    });
    //route to the main page
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../Develop/public.index.html'));
      });
};