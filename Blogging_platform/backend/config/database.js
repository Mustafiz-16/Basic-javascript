const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // console.log('MONGO_URI from env:', process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/iblogDB');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
