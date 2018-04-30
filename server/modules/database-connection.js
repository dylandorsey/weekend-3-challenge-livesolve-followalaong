const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/kocahab_tasks';

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo on ', databaseUrl)
});

