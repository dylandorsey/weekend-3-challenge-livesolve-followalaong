const express = require('express');
const app = express();

// serve static files
app.use(express.static('server/public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`doin the damn thing on port: ${PORT}`);
});