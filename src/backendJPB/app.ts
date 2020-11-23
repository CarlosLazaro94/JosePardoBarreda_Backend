//import modulos
import express, { Request, Response } from 'express';
import router from './routes/default.route';
import cors from 'cors';
//import dependencias
import Ubigeoroutes from './routes/Ubigeo.routes';
import MatriculaRouter from './routes/Matricula.route';
import UsuarioRouter from './routes/Usuario.router';
import CargaAcademicaRouter from './routes/CargaAcademica.route';
import RolesRouter from '../backendJPB/routes/Roles.route';
import DocenteRouter from './routes/Docente.route';
import cursoRouter from './routes/Curso.router';

import ErrorHandler from './handlers/error.handlers';

const app: express.Application = express();


app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//router default
app.use('/', router);
app.use('/matricula', MatriculaRouter);
app.use('/usuario', UsuarioRouter);
app.use('/curso', cursoRouter);
app.use('/docente', DocenteRouter);
app.use('/ubigeo', Ubigeoroutes);
app.use('/carga', CargaAcademicaRouter);
app.use('/roles',RolesRouter);
app.use(ErrorHandler.NotFound)
// no found routes
app.use((req: Request, res: Response) => res.send('Ruta no encontrada'));

export default app;
