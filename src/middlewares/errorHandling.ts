import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const errorHandling = (_err: unknown, _req: Request, res: Response, _next: NextFunction) =>
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });

export default errorHandling;