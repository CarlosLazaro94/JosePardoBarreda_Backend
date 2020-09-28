import { IMatricula, Matricula } from '../models';


export default class MatriculaRepository {

    async insertMatricula(matricula: IMatricula) { 
        const matriculaCreated =  await  Matricula.create(matricula)

        return matriculaCreated
    }

    async getMatricula() {
        const matriculaFind = await Matricula.find()

        return matriculaFind
     }

    async getMatriculaById(_id: String) { 
        const matriculaById = await Matricula.findById(_id)

        return matriculaById
    }

    async updateMatricula(_id:String, matricula:IMatricula) { 
        const matriculaupdate = await Matricula.updateOne({_id}, matricula )
        
        return matriculaupdate
    }



}