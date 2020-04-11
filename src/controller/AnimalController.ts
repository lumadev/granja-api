import { Request, Response } from 'express'
import db from '../../config/database'

class AnimalController {
  async list (req: Request, res: Response) {
    const response = await db.query("SELECT * FROM animal WHERE status = 'ativo' ORDER BY nome ASC");
    return res.status(200).send(response.rows);
  }

  public create (req: Request, res: Response) {
    // TODO to be implemented
  }

  public edit (req: Request, res: Response) {
    const animalId = req.params.id;
  }
  
  async delete (req: Request, res: Response) {
    const animalId = req.params.id;
    await db.query('DELETE FROM animal WHERE id = $1', [
      animalId
    ]);
    res.status(200).send({ message: 'Animal deletado com sucesso!', animalId });
  }
}

export default new AnimalController()