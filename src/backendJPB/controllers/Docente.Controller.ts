import  DocenteRepository  from '../../Context/JosePardoYBarreda/Docente/repositories/Docente.repository';
import { Response, Request } from 'express';
import { IDocente } from '../../Context/JosePardoYBarreda/Docente/model/Docente.model';

export default class DocenteController {
  repository: DocenteRepository;

  constructor(repository: DocenteRepository) {
    this.repository = repository;
    this.insertDocente = this.insertDocente.bind(this);
    this.getDocenteAll = this.getDocenteAll.bind(this);
    this.getDocenteById = this.getDocenteById.bind(this);
    this.updateDocente = this.updateDocente.bind(this);
  }

  async insertDocente(req: Request, res: Response) {
    const docentecreated:IDocente = await this.repository.insertDocente(req.body);

    res.json(docentecreated);
  }

  async getDocenteAll(req: Request, res: Response) {
    const getdocenteall:IDocente[] = await this.repository.getDocenteAll();

    res.json(getdocenteall);
  }

  async getDocenteById(req: Request, res: Response) {
    const _id = req.params._id;
    const getdocentebyid:IDocente = await this.repository.getDocenteById(_id);
    res.json(getdocentebyid);
  }

  async updateDocente(req: Request, res: Response) {

    const _id = req.params._id;
    const Docente: IDocente = req.body;

    const updatedocente:IDocente = await this.repository.updateDocente(_id, Docente);

    res.json(updatedocente);
    
  }
}
