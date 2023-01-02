import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import JWT from '../auth/token';

const jwt = new JWT();

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.tokenValidation(token);
    req.body.user = payload;
    
    next();
  } catch (e) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};

export default validateToken;