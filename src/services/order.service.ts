import OrderModel from '../models/order.model';
import connection from '../models/connection';
import IOrder from '../interfaces/order.interface';

export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public async create(order: IOrder): Promise<IOrder> {
    const { productsIds, userId } = order;
    
    const result = await this.orderModel.create(productsIds, userId);
    return result;
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.orderModel.getAll();
    return orders;
  }
}