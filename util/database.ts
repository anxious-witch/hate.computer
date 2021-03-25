import mongoose from 'mongoose';

export const connectToDatabase = async (): Promise<void> => {
  const uri = process.env.MONGO_URI;

  // Already connected, abort
  if (mongoose.connection.readyState) {
    return;
  }

  if (!uri) {
    throw new Error('Mongo URI is not set!');
  }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};
