import mongoose from 'mongoose';
import config from './config'

const connectDB = async () => {
  console.log('Connecting to MongoDB...');
  console.log('config', config);
    
  try {
    await mongoose.connect('mongodb://root:root@localhost:27017/creep_project?authSource=admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;