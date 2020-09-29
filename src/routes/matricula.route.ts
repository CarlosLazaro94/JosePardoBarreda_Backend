import express, { Router } from 'express';
import { MatriculaRepository } from '../repositories';
import { MatriculaController } from '../controllers';

const router = express.Router();
const reporitory = new MatriculaRepository();
const controller = new MatriculaController(reporitory);

router.post('/', controller.insertMatricula);
router.get('/', controller.getMatricula);
router.get('/:_id', controller.getMatriculaById);
router.put('/:_id', controller.updateMatricula);

export default router;
