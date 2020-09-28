import {UbigeoRepository} from '../repositories'
import {Response, Request} from 'express'
import {Iubigeo} from '../models'

export default class UbigeoController{

    repository:UbigeoRepository

    constructor(repository:UbigeoRepository){
        this.repository = repository;
        this.getUbigeoById = this.getUbigeoById.bind(this)
        this.insertUbigeo = this.insertUbigeo.bind(this)
        this.getUbigeoByProvincia = this.getUbigeoByProvincia.bind(this)
        this.getUbigeoByDepartamento = this.getUbigeoByDepartamento.bind(this)
        this.getUbigeoByDistricto = this.getUbigeoByDistricto.bind(this)
    }


    async insertUbigeo(req: Request, res: Response ){
        const ubigeoCreated  = await this.repository.insertUbigeo(req.body)

        res.json(ubigeoCreated) 
    }

    async getUbigeoById(req:Request, res:Response)
    {   
        const _id = req.params._id
        const getubigeobyid = await this.repository.getubigeoById(_id)
        res.json(getubigeobyid)
        
    }


    async getUbigeoByDepartamento(req:Request, res:Response)
    {   
        
        const Departamento = req.params.Departamento
        const getubigeoDepartamento = await this.repository.getUbigeoByDepartamento(Departamento)
        
        res.json(getubigeoDepartamento)

    }


    async getUbigeoByProvincia(req:Request, res:Response)
    {   
        
        const Provincia = req.params.Provincia
        const getubigeoProvincia = await this.repository.getUbigeoByProvincia(Provincia)
        
        res.json(getubigeoProvincia)

    }

    async getUbigeoByDistricto(req:Request, res:Response)
    {   
        
        const Distrito = req.params.Distrito
        const getubigeoDistricto = await this.repository.getUbigeoByDistricto(Distrito)
        
        res.json(getubigeoDistricto)

    }
} 