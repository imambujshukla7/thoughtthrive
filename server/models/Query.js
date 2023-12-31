const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  autoGeneratedResponse: {
    type: String,
    required: true,
  },
  
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
