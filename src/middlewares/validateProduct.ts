import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import IProduct from '../interfaces/product.interface';
import productSchema from '../utils/productSchema';

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const product: IProduct = req.body;

  const { error } = productSchema.validate(product);

  if (error) {
    const customStatusCode = error.message.includes('required')
      ? StatusCodes.BAD_REQUEST
      : StatusCodes.UNPROCESSABLE_ENTITY;

    return res.status(customStatusCode).json({ message: error.message });
  }

  next();
};

export default validateProduct;