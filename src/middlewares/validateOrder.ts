import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import orderSchema from '../utils/orderSchema';

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  
  const { error } = orderSchema.validate(productsIds);

  if (error) {
    const customStatusCode = error.message.includes('required')
      ? StatusCodes.BAD_REQUEST
      : StatusCodes.UNPROCESSABLE_ENTITY;

    return res.status(customStatusCode).json({ message: error.message });
  }

  next();
};

export default validateOrder;