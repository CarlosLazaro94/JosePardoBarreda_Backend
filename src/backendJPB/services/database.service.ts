import mongoose from 'mongoose';
import Message from '../utils/message';
import yenv from 'yenv';

const env = yenv();

const initializeDatabase = async () => {
  const startConnection = new Promise((resolve, reject) => {
    const url = `mongodb+srv://${env.URL.MONGODB.USER}:${env.URL.MONGODB.PASS}@${env.URL.MONGODB.HOST}/${env.URL.MONGODB.DB}?retryWrites=true&w=majority`;
    const option = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      poolSize: 10,
    };

    const callback = (err: any) => {
      if (err) {
        Message.log('an error ocurred in connection to mongoDB');
        reject(err);
      } else {
        Message.log('connect to mongodb');
        resolve();
      }
    };

    mongoose.connect(url, option, callback);
  });

  await startConnection;
};

export default initializeDatabase;
