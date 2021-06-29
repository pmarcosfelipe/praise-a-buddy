import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListComplimetsReceivedByUserController } from './controllers/ListComplimetsReceivedByUserController';
import { ListComplimetsSentByUserController } from './controllers/ListComplimetsSentByUserController';

import { verifyIsAdmin } from './middlewares/verifyIsAdmin';
import { verifyIsAuthenticated } from './middlewares/verifyIsAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

const listComplimetsSentByUserController =
  new ListComplimetsSentByUserController();
const listComplimetsReceivedByUserController =
  new ListComplimetsReceivedByUserController();

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

router.get(
  '/users/compliments/sent',
  verifyIsAuthenticated,
  listComplimetsSentByUserController.handle
);
router.get(
  '/users/compliments/received',
  verifyIsAuthenticated,
  listComplimetsReceivedByUserController.handle
);

export { router };
