import { IUbigeo } from 'src/models/ubigeo.model';
import {Iubigeo,Ubigeo} from '../models'

export default class UbigeoRepository{


  //insert location
  async insertUbigeo(ubigeo: Iubigeo) { 
    const ubigeoCreated =  await  Ubigeo.create(ubigeo)

    return ubigeoCreated
}

  //get location
  async getubigeoById(_id:String){

    const getubigeobyid = await Ubigeo.findById(_id);
    
    return getubigeobyid;

  }

  //get location for attributes 


  //department 
  async getUbigeoByDepartamento(Departamento:String){

    const getubigeobyDepartamento = await Ubigeo.find({Departamento});
    
    return getubigeobyDepartamento;

  }

  //province

  async getUbigeoByProvincia(Provincia:String){

    const getubigeobyProvincia = await Ubigeo.find({Provincia});
    
    return getubigeobyProvincia;

  }

   //district 
   async getUbigeoByDistricto(Distrito:String){

    const getubigeobyDistricto = await Ubigeo.find({Distrito});
    
    return getubigeobyDistricto;

  }


} 