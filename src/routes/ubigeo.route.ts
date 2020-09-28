import express, { Router } from 'express'
import { UbigeoRepository } from '../repositories'
import { UbigeoController } from '../controllers'

const router = express.Router()
const reporitory = new UbigeoRepository()
const controller = new UbigeoController(reporitory)

router.post('/', controller.insertUbigeo)
router.get('/Departamento/:Departamento',controller.getUbigeoByDepartamento)
router.get('/Provincia/:Provincia',controller.getUbigeoByProvincia)
router.get('/Distrito/:Distrito',controller.getUbigeoByDistricto)
router.get('/:_id',controller.getUbigeoById)

export default router  