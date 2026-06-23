import express from 'express';
import { notFoundMiddleware } from './middlewares/not-found.middleware.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { authRouter } from './routes/auth.route.js';

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(8000, (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log('server running on port: 8000');
});
