import CargaAcademicaRepository from '../../Context/JosePardoYBarreda/CargaAcademica/repositories/CargaAcademica.repository';
import {ICargaAcademica} from '../../Context/JosePardoYBarreda/CargaAcademica/models/CargaAcademica.models';
import {Request, Response} from 'express'


export default class CargaAcademicaController{

    repository:CargaAcademicaRepository;

    constructor(repository:CargaAcademicaRepository){
       this.repository = repository;
        this.insertCargaAcademica = this.insertCargaAcademica.bind(this);
    }

    async insertCargaAcademica(req:Request, res:Response){

        const insertcarga = await this.repository.insertCargaAcademica(

            req.body
      
          );
      
          res.json(insertcarga);
    }


}