const mongoose = require('mongoose');

const ArithmeticSchema = mongoose.Schema({
    question: String,
    answer: String,
    distractors: String
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Arithmetic', ArithmeticSchema);
