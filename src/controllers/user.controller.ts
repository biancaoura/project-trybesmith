import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import JWT from '../auth/token';
import UserService from '../services/user.service';

const jwt = new JWT();

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const payload = await this.userService.create(user);
    const token = jwt.createToken(payload);

    res.status(StatusCodes.CREATED).json({ token });
  };

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const validUser = await this.userService.getByUsername(username);

    if (!validUser || validUser.password !== password) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }

    const token = jwt.createToken(validUser);

    res.status(StatusCodes.OK).json({ token });
  };
}