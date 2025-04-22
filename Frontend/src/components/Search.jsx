import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import assets from "../assets/assets";
import { useLocation } from "react-router-dom";

const Search=()=>{
    const{search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
    const[Visible,setVisible]= useState(false)
    
      
    const location=useLocation()

    useEffect(()=>{
        if(location.pathname.includes("collection")){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    },[location])
    return showSearch  ?(//&& Visible
        <div className=" border-t border-b bg-gray-50 text-center px-10">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="flex-1 outline-none bg-inherit text-sm" placeholder="Search" />
            <img src={assets.search} className="w-5 cursor-pointer" alt="" />
            </div>
            <img src={assets.cross} onClick={()=>setShowSearch(false)} className="inline w-12 cursor-pointer" alt="" />

        </div>
    ):null
}
export default Search