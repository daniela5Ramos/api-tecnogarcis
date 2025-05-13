
import Sale from '../models/sale.model.js';

// Crear una nueva venta
export const createSale = async (req, res) => {
  try {
    const newSale = new Sale(req.body);
    await newSale.save();
    res.status(201).json(newSale);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la venta', error: error.message });
  }
};

// Obtener todas las ventas
export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las ventas', error: error.message });
  }
};

// Obtener una venta por ID
export const getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (!sale) return res.status(404).json({ message: 'Venta no encontrada' });
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la venta', error: error.message });
  }
};

// Actualizar una venta por ID
export const updateSale = async (req, res) => {
  try {
    const updatedSale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSale) return res.status(404).json({ message: 'Venta no encontrada' });
    res.status(200).json(updatedSale);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la venta', error: error.message });
  }
};

// Eliminar una venta por ID
export const deleteSale = async (req, res) => {
  try {
    const deletedSale = await Sale.findByIdAndDelete(req.params.id);
    if (!deletedSale) return res.status(404).json({ message: 'Venta no encontrada' });
    res.status(200).json({ message: 'Venta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la venta', error: error.message });
  }
};
