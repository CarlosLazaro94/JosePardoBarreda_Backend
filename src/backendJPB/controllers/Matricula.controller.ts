import MatriculaRepository from '../../Context/JosePardoYBarreda/Matricula/Unica/Repositories/Matricula.repository';
import { Response, Request } from 'express';
import { IMatricula } from '../../Context/JosePardoYBarreda/Matricula/Unica/models/Matricula.model';
import { IPadreFamilia } from '../../Context/JosePardoYBarreda/Matricula/Unica/models/PadreFamilia.model';
import PadreFamiliaRepository from 'src/Context/JosePardoYBarreda/Matricula/Unica/Repositories/PadreFamilia.repository';

export default class MatriculaController {
  repository: MatriculaRepository;
  repository2: PadreFamiliaRepository;

  constructor(repository: MatriculaRepository, repository2:PadreFamiliaRepository) {

    this.repository = repository;
    this.repository2 = repository2;
    this.insertMatricula = this.insertMatricula.bind(this);
    this.getMatricula = this.getMatricula.bind(this);
    this.getMatriculaById = this.getMatriculaById.bind(this);
    this.updateMatricula = this.updateMatricula.bind(this);

  }

  

  async insertMatricula(req: Request, res: Response) { 

    const matriculaCreated: IMatricula = await this.repository.insertMatricula(req.body);
    const padreCreated : IPadreFamilia = await this.repository2.inserPadre(req.body);

    res.json({
      matriculaCreated, 
      padreCreated
    });
  }

  async getMatricula(req: Request, res: Response) {

    const findMatricula: IMatricula[] = await this.repository.getMatricula();

    res.json(findMatricula);

  }

  async getMatriculaById(req: Request, res: Response) {

    const codMatricula = req.params.codMatricula;
    const findById: IMatricula[] = await this.repository.getMatriculaById(codMatricula);
    res.json(findById);

  }

  async updateMatricula(req: Request, res: Response) {

    const _id = req.params._id;
    const matricula: IMatricula = req.body;

    const updateMatricula = await this.repository.updateMatricula(
      _id,
      matricula
    );

    res.json(updateMatricula);

  }

}
