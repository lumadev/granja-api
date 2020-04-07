import { Request, Response } from 'express'
// import { User } from '../schemas/User'

class AnimalController {
  public list (req: Request, res: Response) {
    // TODO to be implemented

    return res.send('Hello World')
  }

  public create (req: Request, res: Response) {
    // TODO to be implemented
  }

  public delete (req: Request, res: Response) {
    // TODO to be implemented
  }
}

export default new AnimalController()