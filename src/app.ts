import express, { Request, Response } from 'express';
import router from '../src/routes/default.route';
import { MatriculaRouter, UsuarioRouter, Ubigeoroutes } from './routes';
import cors from 'cors'



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
