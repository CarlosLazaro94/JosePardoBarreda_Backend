import initializeServer from './services/server.service';
import initializeDatabase from './services/database.service';
import app from './app';
import Message from './utils/message';

const start = async () => {
  try {
    
    await initializeServer(app);
    await initializeDatabase();
  } catch (error) {
    Message.log('error encontrado : ' + error);
  }
};

start();
