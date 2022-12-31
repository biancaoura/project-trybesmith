import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ILogin from '../interfaces/login.interface';
import loginSchema from '../utils/loginSchema';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const login: ILogin = req.body;

  const { error } = loginSchema.validate(login);

  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }

  next();
};

export default validateLogin;