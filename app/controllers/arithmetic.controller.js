const Arithmetic = require('../models/arithmetic.model.js');

// Create and Save a new arithmetic
exports.create = (req, res, next) => {
  // Validate request
    if(!req.body.question & !req.body.answer) {
        return res.status(400).send({
            message: "Question & Answer fields can not be empty"
        });
    }

    // Create a Question
    const arithmetic = new Arithmetic({
      question: req.body.question,
      answer: req.body.answer,
      distractors: req.body.distractors
    });

    // Save Q in the database
    arithmetic.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Question."
        });
    });
};

// Retrieve and return all Arithmetic Questions from the database.
exports.findAll = (req, res, next) => {
  Arithmetic.find()
     .then(arithmetics => {
         res.send(arithmetics);
     }).catch(err => {
         res.status(500).send({
             message: err.message || "Some error occurred while retrieving questions."
         });
     });
};

// Find a single Arithmetic Q with a ArithmeticId
exports.findOne = (req, res, next) => {
  Arithmetic.findById(req.params.arithmeticId)
      .then(arithmetic => {
          if(!arithmetic) {
              return res.status(404).send({
                  message: "Arithmetic question not found with id " + req.params.arithmeticId
              });
          }
          res.send(arithmetic);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Arithmetic question not found with id " + req.params.arithmeticId
              });
          }
          return res.status(500).send({
              message: "Error retrieving arithmetic with id " + req.params.arithmeticId
          });
      });
};

// Update a Arithmetic Q identified by the ArithmeticId in the request
exports.update = (req, res, next) => {
  // Validate Request
      if(!req.body.question) {
          return res.status(400).send({
              message: "Cannot update without all valid fields"
          });
      }

      // Find arithmetic and update it with the request body
      Arithmetic.findByIdAndUpdate(req.params.arithmeticId, {
          question: req.body.question,
          answer: req.body.answer,
          distractors: req.body.distractors
      }, {new: true})
      .then(arithmetic => {
          if(!arithmetic) {
              return res.status(404).send({
                  message: "Arithmetic not found with id " + req.params.arithmeticId
              });
          }
          res.send(arithmetic);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Arithmetic not found with id " + req.params.arithmeticId
              });
          }
          return res.status(500).send({
              message: "Error updating arithmetic with id " + req.params.arithmeticId
          });
      });
};

// Delete a Arithmetic Q with the specified ArithmeticId in the request
exports.delete = (req, res, next) => {
  Arithmetic.findByIdAndRemove(req.params.arithmeticId)
      .then(arithmetic => {
          if(!arithmetic) {
              return res.status(404).send({
                  message: "Arithmetic not found with id " + req.params.arithmeticId
              });
          }
          res.send({message: "Arithmetic deleted successfully!"});
      }).catch(err => {
          if(err.kind === 'ObjectId' || err.name === 'NotFound') {
              return res.status(404).send({
                  message: "Arithmetic not found with id " + req.params.arithmeticId
              });
          }
          return res.status(500).send({
              message: "Could not delete arithmetic with id " + req.params.arithmeticId
          });
      });
};
