const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema ({
    task_name: {type: String, required: true},
    priority: {type: String},
    due_date: {type: Date}
});

module.exports = mongoose.model('task', TaskSchema);