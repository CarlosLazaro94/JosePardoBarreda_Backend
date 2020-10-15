import http from 'http';
import { Application } from 'express';
import yenv from 'yenv';
import Message from '../utils/message';

const env = yenv();

const initializeServer = async (app: Application) => {
  const startServer = new Promise((resolve, reject) => {
    const server: http.Server = http.createServer(app);
    server
      .listen(env.PORT)
      .on('listening', () => {
        Message.log(`server is running on port ${env.PORT}`);
        resolve();
      })
      .on('error', (err) => {
        Message.log('an error ocurred in server');
        reject(err);
      });
  });

  await startServer;
};
export default initializeServer;
