import { Request, Response } from 'express'
import query from '../../config/database'

class AnimalController {
  async list (req: Request, res: Response) {
    if (req.query.limit === undefined || req.query.page === undefined) {
      return res.status(500).send({ error: 'Por favor, forneça os parâmetros limit e page para paginação da busca' });
    }
    const page = String(req.query.page);
    const limit = String(req.query.limit);
    const offset = (parseInt(page) - 1) * parseInt(limit);

    const response = await query(
      `SELECT * FROM granja.animal 
      WHERE status = 'ativo' 
      ORDER BY nome ASC
      LIMIT ${limit} OFFSET ${offset}`
    );
    return res.status(200).send(response.rows);
  }

  async get(req: Request, res: Response) {
    const animalId = req.params.id;

    const response = await query(`SELECT * FROM granja.animal WHERE id = ${animalId}`);

    return res.status(200).send(response.rows);
  }

  public create (req: Request, res: Response) {
    // TODO to be implemented
  }

  async edit (req: Request, res: Response) {
    const animalId = req.params.id;
    const { nome, status } = req.body;

    try {
      await query(`UPDATE granja.animal SET nome = '${nome}', status = '${status}' WHERE id = ${animalId}`);
      res.status(200).send({ message: 'Animal atualizado com sucesso!', animalId });
    } catch(error) {
      res.status(500).send({ error: 'Erro ao atualizar os dados' });
    }
  }
  
  async delete (req: Request, res: Response) {
    const animalId = req.params.id;
    await query(`DELETE FROM granja.animal WHERE id = ${animalId}`);

    res.status(200).send({ message: 'Animal deletado com sucesso!', animalId });
  }
}

export default new AnimalController()