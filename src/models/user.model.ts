import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
    const { username, vocation, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const [{ insertId }] = result;
    return { id: insertId, ...user };
  }

  public async getByUsername(username: string): Promise<IUser> {
    const [rows] = await this.connection.execute<(
    IUser & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.users WHERE username=?',
      [username],
      );
    return rows[0];
  }
}