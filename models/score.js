var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
    object: {
        type: String
    },
    score: {
        type: Number
    }
});
scoreSchema.set('collection', 'score');
let score = mongoose.model('score', scoreSchema);
module.exports = score;