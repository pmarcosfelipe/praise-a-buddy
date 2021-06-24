import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';

import { verifyIsAdmin } from './middlewares/verifyIsAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post('/users', createUserController.handle);
router.post('/tags', verifyIsAdmin, createTagController.handle);

export { router };
