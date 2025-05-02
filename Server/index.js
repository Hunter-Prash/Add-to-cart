import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import ProductRoutes from './routes/productRoutes.js';
const app=express();
const PORT=3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const dbConnect=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/AddToCart')
        console.log('Connected to MongoDB');
    }catch(err){
        console.log(err);
    }
}
dbConnect();


app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.use('/api/products',ProductRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

