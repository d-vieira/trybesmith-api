import express from 'express';
import orderRouter from './routes/order.routes';
import productRouter from './routes/products.routes';
import userRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
