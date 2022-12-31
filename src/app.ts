import express from 'express';
import 'express-async-errors';

import { loginRoute, orderRoute, productRoute, userRoute } from './routes';
import errorHandling from './middlewares/errorHandling';

const app = express();

app.use(express.json());

app.use('/products', productRoute);

app.use('/users', userRoute);

app.use('/orders', orderRoute);

app.use('/login', loginRoute);

app.use(errorHandling);

export default app;
