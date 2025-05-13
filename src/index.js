import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import productsRoutes from './routes/products.routes.js';
import saleRoutes from './routes/sale.routes.js';
import { PORT } from './config/config.js'; // PORT viene de config, no lo declares de nuevo

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/sales', saleRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
