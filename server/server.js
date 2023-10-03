const express = require('express');
const mongoose = require('mongoose');
const queryRoutes = require('./routes/queryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb://localhost:27017/thoughtthrive', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use('/api', queryRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
