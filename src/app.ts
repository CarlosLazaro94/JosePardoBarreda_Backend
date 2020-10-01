//import modulos
import express, { Request, Response } from 'express';
import router from '../src/routes/default.route';
import cors from 'cors'
//import dependencias
import Ubigeoroutes from './routes/Ubigeo.routes';
import MatriculaRouter from './routes/Matricula.route';
import UsuarioRouter from './routes/Usuario.router';



const app: express.Application = express();


app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//router default
app.use('/', router);
app.use('/matricula', MatriculaRouter);
app.use('/usuario', UsuarioRouter);
app.use('/ubigeo', Ubigeoroutes);

// no found routes
app.use((req: Request, res: Response) => res.send('Ruta no encontrada'));

export default app;
