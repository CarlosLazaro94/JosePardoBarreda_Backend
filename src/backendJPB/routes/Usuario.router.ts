import express, { Router } from 'express';
import  UsuarioRepository  from '../../Context/JosePardoYBarreda/Auth/repositories/Usuario.repository';
import  UsuarioController  from '../controllers/Usuario.controller';
import ErrorHandler from '../handlers/error.handlers';

const router = express.Router();
const reporitory = new UsuarioRepository();
const controller = new UsuarioController(reporitory);

router.post('/',ErrorHandler.catchAsync(controller.insertUsuario));
router.get('/', ErrorHandler.catchAsync(controller.getUsuarioAll));
router.get('/:_id', ErrorHandler.catchAsync(controller.getUsuarioById));
router.put('/:_id', ErrorHandler.catchAsync(controller.updateusuario));

export default router;
