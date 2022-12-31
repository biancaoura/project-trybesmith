import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUser from '../interfaces/user.interface';

export default class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public async create(user: IUser): Promise<IUser> {
    return this.userModel.create(user);
  }

  public async getByUsername(username: string): Promise<IUser> {
    const user = await this.userModel.getByUsername(username);
    return user;
  }
}