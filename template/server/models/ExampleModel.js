// Rename this file to match your model name, and update the constant, schema fields, and export accordingly.

const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ExampleModel = mongoose.model('Example', exampleSchema);

module.exports = ExampleModel;
