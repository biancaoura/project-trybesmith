import jwt, { JwtPayload } from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';

export default class JWT {
  private secret = process.env.JWT_SECRET as string;

  public createToken(payload: IUser): string {
    return jwt.sign({ payload }, this.secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
  }

  public tokenValidation(token: string): string | JwtPayload {
    return jwt.verify(token, this.secret);
  }
}