import ProductModel from '../models/product.model';
import connection from '../models/connection';
import IProduct from '../interfaces/product.interface';

export default class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public async create(product: IProduct): Promise<IProduct> {
    return this.productModel.create(product);
  }
}