import express, { Router } from 'express';
import  UsuarioRepository  from '../../Context/JosePardoYBarreda/Auth/repositories/Usuario.repository';
import  UsuarioController  from '../controllers/Usuario.controller';

const router = express.Router();
const reporitory = new UsuarioRepository();
const controller = new UsuarioController(reporitory);

router.post('/', controller.insertUsuario);
router.get('/', controller.getUsuarioAll);
router.get('/:_id', controller.getUsuarioById);
router.put('/:_id', controller.updateusuario);

export default router;
