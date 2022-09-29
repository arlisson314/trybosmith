import express from 'express';
import 'express-async-errors';
import productsRoutes from './routes/productRouts';
import loginRouter from './routes/loginRouts';
import orderRouts from './routes/orderRouts';
import userRouter from './routes/userRouts';
import errorMiddleare from './middleareError.ts/errorMiddleare';

const app = express();
app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', userRouter);
app.use('/orders', orderRouts);
app.use('/login', loginRouter);

app.use(errorMiddleare);

export default app;