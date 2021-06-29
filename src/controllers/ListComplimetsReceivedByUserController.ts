import { Request, Response } from 'express';
import { ListComplimetsReceivedByUserService } from '../services/ListComplimetsReceivedByUserService';

class ListComplimetsReceivedByUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listComplimentsReceivedByUserService =
      new ListComplimetsReceivedByUserService();

    const compliments = await listComplimentsReceivedByUserService.execute(
      user_id
    );

    return response.json(compliments);
  }
}

export { ListComplimetsReceivedByUserController };
