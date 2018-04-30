const router = require('express').Router();
const Task = require('../models/task.schema');

router.post('/', (req,res) => {
    console.log(`new task to add: ${req.body}`);
    // save to database
    Task.create(req.body)
    .then(()=> {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error on create', error);
        res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
    // get all tasks
    Task.find({})
    .then((tasks) => {
        res.send(tasks)
    })
    .catch((error) => {
        console.log('error on find', error);
        res.sendStatus(500);
    });
});

module.exports = router;