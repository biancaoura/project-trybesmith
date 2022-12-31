import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUser from '../interfaces/user.interface';
import userSchema from '../utils/userSchema';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;

  const { error } = userSchema.validate(user);
  
  if (error) {
    const customStatusCode = error.message.includes('required')
      ? StatusCodes.BAD_REQUEST
      : StatusCodes.UNPROCESSABLE_ENTITY;

    return res.status(customStatusCode).json({ message: error.message });
  }

  next();
};

export default validateUser;