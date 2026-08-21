const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoMemoryServer } = require('mongodb-memory-server');

const app = express();
app.use(express.json());
app.use(cors());

// Start In-Memory MongoDB automatically
async function startDB() {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);
  console.log('✅ Connected to In-Memory MongoDB!');

  app.use('/api/comments', require('./routes/comments'));
  app.use('/api/announcements', require('./routes/announcements'));

  app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
}

startDB().catch(err => console.error('❌ DB Error:', err));