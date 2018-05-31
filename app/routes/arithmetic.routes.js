module.exports = (app) => {
    const arithmetic = require('../controllers/arithmetic.controller.js');

    // Create a new Question
    app.post('/arithmetic', arithmetic.create);

    // Retrieve all Question
    app.get('/arithmetic', arithmetic.findAll);

    // Retrieve a single Question with arithmeticId
    app.get('/arithmetic/:arithmeticId', arithmetic.findOne);

    // Update a Question with arithmeticId
    app.put('/arithmetic/:arithmeticId', arithmetic.update);

    // Delete a Question with arithmeticId
    app.delete('/arithmetic/:arithmeticId', arithmetic.delete);
}
