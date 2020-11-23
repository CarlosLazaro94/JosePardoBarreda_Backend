import express, { Router } from 'express';
import  CursosRepository  from '../../Context/JosePardoYBarreda/Cursos/repositories/Curso.repository';
import  CursoController  from '../controllers/Curso.Controller';
import ErrorHandler from '../handlers/error.handlers';

const router = express.Router();
const reporitory = new CursosRepository();
const controller = new CursoController(reporitory);

router.post('/',ErrorHandler.catchAsync(controller.insertCurso));
router.get('/', ErrorHandler.catchAsync(controller.getCursoAll));
router.get('/:_id', ErrorHandler.catchAsync(controller.getCursoById));
router.put('/:_id', ErrorHandler.catchAsync(controller.updateCurso));

export default router;
