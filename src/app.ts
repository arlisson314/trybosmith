import express from 'express';
// import 'express-async-errors';
import productsRoutes from './routes/productRouts';
import userRouter from './routes/userRouts';

const app = express();
app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', userRouter);

export default app;
