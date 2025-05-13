import { Product } from '../models/products.model.js';

export const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  const newProduct = await Product.create({ name, price, stock });
  res.json(newProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.json({ message: 'Producto eliminado' });
};
