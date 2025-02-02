// const mongoose = require('mongoose');
// const { Schema } = mongoose;
// const ProductSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     slug: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     desc: {
//         type: String,
//         required: true
//     },
//     img: {
//         type: String,
//         required: true
       
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     size: {
//         type: String
//     },
//     color: {
//         type: String
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     availableQty: {
//         type: Number,
//         required: true
//     },
// }, {timestamps: true});
// mongoose.models = {}
// export default  mongoose.model('Product', ProductSchema);

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title : {type: String, required : true},
    slug : {type: String, required : true},
    desc : {type: String, required : true},
    img : {type: String, required : true},
    category : {type: String, required : true},
    size : {type: String},
    color : {type: String},
    price : {type: Number,required:true},
    availableQty : {type: Number,required:true}, 
    
},{timestamps:true});
export default mongoose.models.Product || mongoose.model("Product",productSchema);