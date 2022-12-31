import OrderModel from '../models/order.model';
import connection from '../models/connection';
import IOrder from '../interfaces/order.interface';

export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.orderModel.getAll();
    return orders;
  }
}