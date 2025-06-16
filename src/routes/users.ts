import { Router } from 'express';
import { getUsers, getUserById, createUser, updateUserProfile, updateUserAvatar } from '../controllers/users';

const usersRouter = Router();

usersRouter.get('/users', getUsers);
usersRouter.get('/users/:userId', getUserById);
usersRouter.post('/users', createUser);
usersRouter.patch('/users/me', updateUserProfile);
usersRouter.patch('/users/me/avatar', updateUserAvatar);

export default usersRouter;