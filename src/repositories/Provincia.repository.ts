import {IProvincia, Provincias} from '../models'

export default class ProvinciaRepository {


    async insertProvincia(provincias: IProvincia) { 
        const provinciasCreated =  await  Provincias.create(provincias)

        return provinciasCreated
    }


    async getProvincias(){

        const getprovincias = await Provincias.find()

        return getprovincias
    }

    async getProvinciasById(department_id:String){

        const getprovinciasbyid = await Provincias.find({department_id})
        return getprovinciasbyid

    }



}