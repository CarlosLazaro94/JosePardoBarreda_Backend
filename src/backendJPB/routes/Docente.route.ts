import express, { Router } from 'express';
import  DocenteRepository  from '../../Context/JosePardoYBarreda/Docente/repositories/Docente.repository';
import  DocenteController  from '../controllers/Docente.controller';
import ErrorHandler from '../handlers/error.handlers';

const router = express.Router();
const reporitory = new DocenteRepository();
const controller = new DocenteController(reporitory);

router.post('/',ErrorHandler.catchAsync(controller.insertDocente));
router.get('/', ErrorHandler.catchAsync(controller.getDocenteAll));
router.get('/:_id', ErrorHandler.catchAsync(controller.getDocenteById));
router.put('/:_id', ErrorHandler.catchAsync(controller.updateDocente));

export default router;
