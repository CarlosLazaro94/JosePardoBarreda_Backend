import express, { Router } from 'express';
import {
  DepartamentoRepository,
  ProvinciaRepository,
  DistritoRepository,
} from '../repositories';
import {
  DepartamentoController,
  ProvinciaController,
  DistritoController,
} from '../controllers';

const router = express.Router();
const reporitorydepart = new DepartamentoRepository();
const controllerdepart = new DepartamentoController(reporitorydepart);

const reporitoryProvin = new ProvinciaRepository();
const controllerProvin = new ProvinciaController(reporitoryProvin);

const repositoryDis = new DistritoRepository();
const controllerDis = new DistritoController(repositoryDis);

//Departamento
router.get('/Departamento', controllerdepart.getDepartamentos);
router.get('/Departamento/:id', controllerdepart.getDepartamentosById);

//Provincia
router.get('/Provincia', controllerProvin.getProvincia);
router.get('/Provincia/:department_id', controllerProvin.getProvinciaById);

//Distrito
router.get('/Distrito', controllerDis.getDistrito);
router.get('/Distrito/:province_id', controllerDis.getDistritoById);

export default router;
