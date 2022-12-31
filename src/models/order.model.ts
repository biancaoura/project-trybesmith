import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      `SELECT o.id, user_id AS userId,
        JSON_ARRAYAGG(p.id) AS productsIds
        FROM Trybesmith.orders AS o
        INNER JOIN Trybesmith.products AS p
        ON o.id = p.order_id
        GROUP BY o.id`);

    return rows;
  }
}