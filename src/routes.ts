import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';

import { verifyIsAdmin } from './middlewares/verifyIsAdmin';
import { verifyIsAuthenticated } from './middlewares/verifyIsAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post('/users', createUserController.handle);
router.post(
  '/tags',
  verifyIsAuthenticated,
  verifyIsAdmin,
  createTagController.handle
);
router.post('/login', authenticateUserController.handle);
router.post(
  '/compliments',
  verifyIsAuthenticated,
  createComplimentController.handle
);

export { router };
