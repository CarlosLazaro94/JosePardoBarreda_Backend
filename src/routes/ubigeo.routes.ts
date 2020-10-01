import express, { Router } from 'express';
import DepartamentoRepository from '../repositories/Departamento.repository';
import  ProvinciaRepository from '../repositories/Provincia.repository';
import  DistritoRepository from  '../repositories/Distrito.repository';

import DepartamentoController from '../controllers/Departamento.controller';
import ProvinciaController from '../controllers/Provincia.controller';
import DistritoController from '../controllers/Distrito.controller';

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
