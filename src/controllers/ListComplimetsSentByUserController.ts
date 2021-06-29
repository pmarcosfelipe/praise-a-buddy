import { Request, Response } from 'express';
import { ListComplimetsSentByUserService } from '../services/ListComplimetsSentByUserService';

class ListComplimetsSentByUserController {
  async handle(request: Request, response: Response) {
    const listComplimentsSentByUserService =
      new ListComplimetsSentByUserService();

    const compliments = await listComplimentsSentByUserService.execute(
      request.user_id
    );

    return response.json(compliments);
  }
}

export { ListComplimetsSentByUserController };
