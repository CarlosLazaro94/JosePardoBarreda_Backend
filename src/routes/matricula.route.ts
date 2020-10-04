import express, { Router } from 'express';
import  MatriculaRepository  from '../repositories/Matricula.repository';
import  PadreFamiliaRepository from '../repositories/PadreFamilia.repository'
import  MatriculaController  from '../controllers/Matricula.controller';


const router = express.Router();
const reporitory = new MatriculaRepository();
const repository2 = new PadreFamiliaRepository();
const controller = new MatriculaController(reporitory, repository2);

router.post('/', controller.insertMatricula);
router.get('/', controller.getMatricula);
router.get('/:_id', controller.getMatriculaById);
router.put('/:_id', controller.updateMatricula);

export default router;
