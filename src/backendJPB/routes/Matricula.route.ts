import express, { Router } from 'express';
import  MatriculaRepository  from '../../Context/JosePardoYBarreda/Matricula/Unica/Repositories/Matricula.repository';
import  PadreFamiliaRepository from '../../Context/JosePardoYBarreda/Matricula/Unica/Repositories/PadreFamilia.repository'
import  MatriculaController  from '../controllers/Matricula.controller';


const router = express.Router();
const reporitory = new MatriculaRepository();
const repository2 = new PadreFamiliaRepository();
const controller = new MatriculaController(reporitory, repository2);

router.post('/', controller.insertMatricula);
router.get('/', controller.getMatricula);
router.get('/:codMatricula', controller.getMatriculaById);
router.put('/:_id', controller.updateMatricula);

export default router;
