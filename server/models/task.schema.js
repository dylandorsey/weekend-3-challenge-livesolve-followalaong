const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema ({
    task_name: {type: String, required: true},
    priority: {type: String},
    complete: {type: Boolean, default: false},
    due_date: {type: Date},
});

module.exports = mongoose.model('task', TaskSchema);