import  ProvinciaRepository  from '../repositories/Provincia.repository';
import { Request, Response } from 'express';

export default class ProvinciaController {
  repository: ProvinciaRepository;

  constructor(repository: ProvinciaRepository) {
    this.repository = repository;
    this.insertProvincia = this.insertProvincia.bind(this);
    this.getProvincia = this.getProvincia.bind(this);
    this.getProvinciaById = this.getProvinciaById.bind(this);
  }

  async insertProvincia(req: Request, res: Response) {
    const provinciaCreated = await this.repository.insertProvincia(req.body);

    res.json(provinciaCreated);
  }

  async getProvincia(req: Request, res: Response) {
    const getprovincia = await this.repository.getProvincias();

    res.json(getprovincia);
  }

  async getProvinciaById(req: Request, res: Response) {
    const department_id = req.params.department_id;
    const getprovinciasbyid = await this.repository.getProvinciasById(
      department_id
    );

    res.json(getprovinciasbyid);
  }
}
