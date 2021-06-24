import { Request, Response, NextFunction } from 'express';

export function verifyIsAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  /**
   * @TODO Verificar se usuário é ADMIN
   */

  const admin = true;

  if (admin) return next();

  return response.status(401).json({ error: 'Unauthorized user!' });
}
