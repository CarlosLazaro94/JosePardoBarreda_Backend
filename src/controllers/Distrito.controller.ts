import {DistritoRepository} from '../repositories'
import {Request , Response} from 'express'

export default class DistritoController{


    repository:DistritoRepository

    constructor(repository:DistritoRepository){

        this.repository = repository
        this.insertDistrito = this.insertDistrito.bind(this)
        this.getDistrito = this.getDistrito.bind(this)
        this.getDistritoById = this.getDistritoById.bind(this)
    }


    async insertDistrito(req: Request, res: Response ){
        const distritoCreated  = await this.repository.insertDistritos(req.body)

        res.json(distritoCreated) 
    }

    async getDistrito(req: Request, res: Response){
            
        const getdistrito= await this.repository.getDistritos()

        res.json(getdistrito)

    }

    async getDistritoById(req: Request, res:Response){

        const province_id = req.params.province_id
        const getdistritobyid = await this.repository.getDistritosById(province_id)
            
        res.json(getdistritobyid)
    }
    



}