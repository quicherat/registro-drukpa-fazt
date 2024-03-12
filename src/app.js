import express from 'express';
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import practiRoutes from './routes/practi.routes.js'
import evenRoutes from './routes/even.routes.js'
import matriRoutes from './routes/matri.routes.js'
import pagosRoutes from './routes/pagos.routes.js'


const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());


app.use("/api", authRoutes);
app.use("/api", practiRoutes);
app.use("/api", evenRoutes);
app.use("/api", matriRoutes);
app.use("/api", pagosRoutes);







export default app;
