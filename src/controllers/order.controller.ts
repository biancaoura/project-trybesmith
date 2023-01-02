import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}
  
  public create = async (req: Request, res: Response) => {
    const { id: userId } = req.body.user.payload;
    const { productsIds } = req.body;

    const orderBody = { userId, productsIds };

    const newOrder = await this.orderService.create(orderBody);

    res.status(StatusCodes.CREATED).json(newOrder);
  };

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();

    res.status(StatusCodes.OK).json(orders);
  };
}