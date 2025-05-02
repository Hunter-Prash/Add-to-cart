import express from 'express';
import mongoose from 'mongoose';

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

    quantity:{
        type:Number,
        default:1
    }
},{timestamps:true});

export const Product=mongoose.model('Product',productSchema);
