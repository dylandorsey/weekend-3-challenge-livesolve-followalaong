const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const taskRouter = require('./routes/task.route');

// mongoose connection
require('./modules/database-connection');

// use body-parser
app.use(bodyParser.json());

// serve static files
app.use(express.static('server/public'));

// Routes
app.use('/task', taskRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`doin the damn thing on port: ${PORT}`);
});