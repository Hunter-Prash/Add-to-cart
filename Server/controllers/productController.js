
import { Product } from '../models/productModel.js';

export const addProduct=async(req,res)=>{
    const {name,price,quantity}=req.body;
    try{
        const newproduct=new Product({
            name,
            price,
            quantity
        });
        await newproduct.save();
        res.status(201).json(newproduct);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

 export const getProducts=async(req,res)=>{
    try{
        const products=await Product.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message:err.message});
    }   
 }

 //update product
    export const updateProduct=async(req,res)=>{
        const {id}=req.params;
        const {name,price,quantity}=req.body;
        try{
            const updatedProduct=await Product.findByIdAndUpdate(id,{
                name,
                price,
                quantity
            },{new:true}); 
            res.status(200).json(updatedProduct);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }


//delete product
