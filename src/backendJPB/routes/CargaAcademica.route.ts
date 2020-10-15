import express, { Router } from 'express';
import CargaAcademicaRepository  from '../../Context/JosePardoYBarreda/CargaAcademica/repositories/CargaAcademica.repository';
import CargaAcademicaController from '../controllers/CargaAcademica.Controller'


const router = express.Router();
const reporitory = new CargaAcademicaRepository();
const controller = new CargaAcademicaController(reporitory);

router.post('/', controller.insertCargaAcademica);

export default router;
