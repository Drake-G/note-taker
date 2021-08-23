const express = require('express');
// const html = require('./routes/htmlRoutes');
// const api = require('./routes/apiRoutes')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.use("/api",api);
// app.use("/",html);

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));