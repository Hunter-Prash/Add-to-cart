import express from "express";
import { addProduct, getProducts, updateProduct } from "../controllers/productController.js";

const router=express.Router();

router.post('/add',addProduct);
router.get('/get',getProducts)
router.put('/update/:id',updateProduct)
export default router;