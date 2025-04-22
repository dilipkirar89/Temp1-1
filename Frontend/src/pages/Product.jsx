import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import assets from "../assets/assets";

const Product=()=>{
 const {productId}=  useParams()
const {products,currency,addToCart} =useContext(ShopContext)
    const [productData,setProductData]=useState(false);
    const [image,setImage]=useState("");


    const fetchProductsData = async() =>{
        products.map((item)=>{
          if (item._id === productId) {
            setProductData(item)
            setImage(item.image[0])
            // console.log(item)
            return null
            
          }
        })
    }
    useEffect(()=>{
      fetchProductsData()
    },[productId])
    
return productData ?(
  <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-10 "> 
 

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />
              ))
            }

          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1> 
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.starIcone} className="w-3 5" alt="" />
            <img src={assets.starIcone} className="w-3 5"alt="" />
            <img src={assets.starIcone} className="w-3 5" alt="" />
            <img src={assets.starIcone} className="w-3 5" alt="" />
            <img src={assets.dullStar}  className="w-3 5" alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
        

          <button onClick={()=>addToCart(productData._id)} className="bg-black my-4 text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
              <hr className="mt-8 sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Eassy exchange policy</p>

              </div>
        </div>
      </div>
         {/* DESCRIPTION AND REVIEW SECTION */}
         <div className="mt-20">
          <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Reviews (122)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus aperiam dolores est? Similique quos vitae optio reprehenderit ut molestias doloremque tempora. Sit totam quasi reiciendis labore quidem minima at.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquam esse voluptatem laudantium tempora exercitationem! Maiores asperiores sunt molestiae officiis, optio vel. Ab nihil tempore quaerat corporis cumque laboriosam doloremque.</p>
          </div>

         </div>
 </div>
) : <div className="opacity-0"></div>
}
export default Product
