import { Router } from 'express';
import {
  createSale,
  getSales,
  getSaleById,
  updateSale,
  deleteSale
} from '../controllers/sale.controller.js';

const router = Router();

// 👉 Ruta para crear una nueva venta
router.post('/', createSale);

// 👉 Ruta para obtener todas las ventas
router.get('/', getSales);

// 👉 Ruta para obtener una venta por ID
router.get('/:id', getSaleById);

// 👉 Ruta para actualizar una venta por ID
router.put('/:id', updateSale);

// 👉 Ruta para eliminar una venta por ID
router.delete('/:id', deleteSale);

export default router;
