import  CursosRepository  from '../../Context/JosePardoYBarreda/Cursos/repositories/Curso.repository';
import { Response, Request } from 'express';
import { ICursos } from '../../Context/JosePardoYBarreda/Cursos/models/Curso.model';

export default class CursoController {
  repository: CursosRepository;

  constructor(repository: CursosRepository) {
    this.repository = repository;
    this.insertCurso = this.insertCurso.bind(this);
    this.getCursoAll = this.getCursoAll.bind(this);
    this.getCursoById = this.getCursoById.bind(this);
    this.updateCurso = this.updateCurso.bind(this);
  }

  async insertCurso(req: Request, res: Response) {
    const cursocreated:ICursos = await this.repository.insertCursos(req.body);

    res.json(cursocreated);
  }

  async getCursoAll(req: Request, res: Response) {
    const getcursoall:ICursos[] = await this.repository.getCursosAll();

    res.json(getcursoall);
  }

  async getCursoById(req: Request, res: Response) {
    const _id = req.params._id;
    const getcursobyid:ICursos = await this.repository.getCursosById(_id);
    res.json(getcursobyid);
  }

  async updateCurso(req: Request, res: Response) {

    const _id = req.params._id;
    const Curso: ICursos = req.body;

    const updatecurso:ICursos = await this.repository.updateCursos(_id, Curso);

    res.json(updatecurso);
    
  }
}
