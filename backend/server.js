const express = require('express');
const mongoose = require('mongoose');



const app = express();
const PORT = process.env.PORT || 3001;



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

  


// Routes
app.use('/api/tasks', require('./routes/tasks'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
