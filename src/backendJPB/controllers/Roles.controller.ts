import  RolesRepository from  '../../Context/JosePardoYBarreda/Auth/repositories/Roles.repository';
import {Response, Request} from 'express'
import {IRoles} from '../../Context/JosePardoYBarreda/Auth/models/Roles.model';
import Responses from '../utils/reponses.util';
export default class RolesController{


    repository : RolesRepository;

    constructor(repository:RolesRepository){

        this.repository = repository;
        this.insertRoles=this.insertRoles.bind(this);
        this.updateRole=this.updateRole.bind(this);
        this.getById=this.getById.bind(this)
    }

    async insertRoles(req:Request, res:Response){
        
        const insertrole:IRoles = await this.repository.insertRole(req.body);
        
        return insertrole;
    }

    async getById(req:Request, res:Response){

        const getbyid:IRoles = await this.repository.getRoleById(req.params._id);
        
        if(getbyid){
            Responses.send(res,200, getbyid);
        }
        Responses.send(res,404, {});
    }

    async updateRole(req:Request, res:Response){

        const updatebyid:IRoles = await this.repository.getRolUpdate(req.params._id, req.body);

      //   res.json(updatebyid);

       if(updatebyid){
            Responses.send(res, 200, updatebyid);
        }
        Responses.send(res,404,{});

    }
}
