import { Request, Response } from "express";
import Sweet from "../models/Sweet";

// ADD SWEET
export const addSweet = async (req: Request, res: Response) => {
  try {
    const sweet = await Sweet.create(req.body);
    res.status(201).json(sweet);
  } catch {
    res.status(500).json({ message: "Failed to add sweet" });
  }
};
export const searchSweets = async (req: Request, res: Response) => {
  const { name, category, minPrice, maxPrice } = req.query;

  const filter: any = {};

  if (name) {
    filter.name = { $regex: name, $options: "i" };
  }

  if (category) {
    filter.category = category;
  }

  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  const sweets = await Sweet.find(filter);
  res.json(sweets);
};
// PURCHASE SWEET
export const purchaseSweet = async (req: Request, res: Response) => {
  const sweet = await Sweet.findById(req.params.id);

  if (!sweet) {
    return res.status(404).json({ message: "Sweet not found" });
  }

  if (sweet.quantity <= 0) {
    return res.status(400).json({ message: "Out of stock" });
  }

  sweet.quantity -= 1;
  await sweet.save();

  res.json(sweet);
};

// RESTOCK SWEET (ADMIN)
export const restockSweet = async (req: Request, res: Response) => {
  const { quantity } = req.body;

  const sweet = await Sweet.findById(req.params.id);
  if (!sweet) {
    return res.status(404).json({ message: "Sweet not found" });
  }

  sweet.quantity += quantity;
  await sweet.save();

  res.json(sweet);
};

// DELETE SWEET (ADMIN)
export const deleteSweet = async (req: Request, res: Response) => {
  await Sweet.findByIdAndDelete(req.params.id);
  res.json({ message: "Sweet deleted successfully" });
};

// GET ALL SWEETS
export const getSweets = async (_: Request, res: Response) => {
  const sweets = await Sweet.find();
  res.json(sweets);
};
