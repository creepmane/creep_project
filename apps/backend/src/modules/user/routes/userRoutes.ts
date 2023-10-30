import { Router } from 'express';
import * as UserController from '../controllers/UserController';
import { isAuthenticated } from '../../auth/middleware/authMiddleware';

const router = Router();

router.post('/users', isAuthenticated, UserController.createUser);
router.get('/users/:id', isAuthenticated, UserController.getUser);
router.put('/users/:id', isAuthenticated, UserController.updateUser);
router.delete('/users/:id', isAuthenticated, UserController.deleteUser);

export default router;