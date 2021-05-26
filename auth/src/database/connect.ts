import mongoose from 'mongoose';
import { config } from '../config';
import { Database, User } from '../lib';

export const connectDatabase = async (): Promise<Database | undefined> => {
  try {
    const {
      connection: { db }
    } = await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.info(`\nConnected to MongoDB 🔌🔌🔌`);

    return {
      users: db.collection<User>('users')
    };
  } catch (error) {
    console.error(error);
    console.info(`\n❗❗❗🚨🚨 Failed to Connected to MongoDB 🚨🚨❗❗❗`);
  }
};
