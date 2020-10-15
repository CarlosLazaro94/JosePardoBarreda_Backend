import express, { Router } from 'express';
import RolesController from '../controllers/Roles.controller';
import RolesRepository from '../../Context/JosePardoYBarreda/Auth/repositories/Roles.repository';
import ErrorHandler from '../handlers/error.handlers';


const router = express.Router();
const repository = new RolesRepository();
const controlleroles =new  RolesController(repository);


router.post('/',ErrorHandler.catchAsync(controlleroles.insertRoles));
router.get('/:_id',ErrorHandler.catchAsync(controlleroles.getById));
router.put('/:_id',ErrorHandler.catchAsync(controlleroles.updateRole));

export default router;
 