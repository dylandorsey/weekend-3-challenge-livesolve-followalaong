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
    Task.find({}).sort('complete')
    .then((tasks) => {
        res.send(tasks);
    })
    .catch((error) => {
        console.log('error on find', error);
        res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
    // get all tasks
    Task.findByIdAndUpdate(req.body._id, req.body)
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error on update', error);
        res.sendStatus(500);
    });
});

router.delete('/', (req, res) => {
    // get all tasks
    Task.findByIdAndRemove(req.query._id)
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error on delete', error);
        res.sendStatus(500);
    });
});

module.exports = router;