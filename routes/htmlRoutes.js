const path = require('path');

module.exports = (app) => {
    //route to the notes page
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });


    //routes to the main page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
      });
};