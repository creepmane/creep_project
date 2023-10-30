import { Request, Response } from 'express';
import User from '../models/UserModel';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUser = async (req: Request, res: Response) => {/* ... */};
export const updateUser = async (req: Request, res: Response) => {/* ... */};
export const deleteUser = async (req: Request, res: Response) => {/* ... */};