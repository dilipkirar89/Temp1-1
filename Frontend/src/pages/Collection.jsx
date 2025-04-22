import React, { useContext, useEffect, useState } from "react";
import {ShopContext }from "../context/ShopContext"
import {assets} from "../assets/assets";
import Title from "../components/Title"
import ProductItem from "../components/ProductItem"
const Collection=()=>{
  const {products,search,showSearch}=useContext(ShopContext);
    const [ShowFilter,setShowFilter]= useState(false)
    const [filterProducts,setFilterProducts]=useState([])
    const [category,setCategory]= useState([])
    const [subcategory,setSubCategory]= useState([])
    const [sortType,setSortType]= useState("relavent")

    const toggelCategory=(e)=>{
      if (category.includes(e.target.value)) {
        setCategory(prev=>prev.filter(item=>item!==e.target.value))
      } 
      // removing an item (with the value e.target.value) from the category by filtering it out.
// ensures that any item in the category array that matches the value in e.target.value will be removed from the new array.
else{
  setCategory(prev =>[...prev,e.target.value])  //[...prev, e.target.value]: This creates a new array by spreading the elements of the prev array and then adding e.target.value at the end of the array
}
}
{/*const toggelSubCategory=(e)=>{
  if (subcategory.includes(e.target.value)) {
    setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
  } 
  // removing an item (with the value e.target.value) from the category by filtering it out.
// ensures that any item in the category array that matches the value in e.target.value will be removed from the new array.
else{
setSubCategory(prev =>[...prev,e.target.value])  //[...prev, e.target.value]: This creates a new array by spreading the elements of the prev array and then adding e.target.value at the end of the array
}
}*/}

const applyFilter=()=>{
  let productsCopy=products.slice()
if (showSearch && search){
  productsCopy = productsCopy.filter(item => item.name.toLowerCase())
}
  // Check if category is selected
  if (category.length> 0) {
    productsCopy=productsCopy.filter(item => category.includes(item.category))
  }
   // Check if subcategory is selected
  //  if (subcategory.length > 0) {
  //   console.log('Filtering by subcategory:', subcategory); // log the selected subcategories
  //   productsCopy = productsCopy.filter(item => {
  //     console.log('Item subcategory:', item.subcategory); // log the subcategory of each item
  //     return subcategory.includes(item.subcategory);
  //   });
  //   console.log('Filtered products by subcategory:', productsCopy);
  // }

  setFilterProducts(productsCopy)
}
const sortProduct=()=>{
  let fpCopy=filterProducts.slice()

  switch (sortType) {
    case "low-high":
      setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)))
      break;
     
    case "high-low":
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
        break;  
  
    default:
      applyFilter();
      break;
  }
}

    useEffect(()=>{
     applyFilter() 
    },[category,subcategory,search,showSearch])


    useEffect(()=>{
     sortProduct() 
     },[sortType])
   
return(
  <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-10">
{/* FILTER OPTION */}

  <div className="min-w-60">
    <p onClick={()=>{setShowFilter(!ShowFilter)}} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS 
      <img className={`h-6 sm:hidden ${ShowFilter ? "rotate-180" : ""} `} src={assets.dropdown} alt="" />
    </p>
    {/* Category Filter */}
    <div className={`border border-green-300 pl-5 py-3 mt-6 ${ShowFilter ? "":"hidden"} sm:block`}>
      <p className="mb-3 text-sm font-medium "> CATEGORIES</p>
      <div className=" flex flex-col gap-2 text-sm font-light text-gray-700">
        <p className=" flex  gap-2">
          <input type="checkbox" className="w-3" value={"Men"} onChange={toggelCategory}/>Men
        </p>

        <p className=" flex  gap-2">
          <input type="checkbox" className="w-3" value={"Women"} onChange={toggelCategory}/>Women
        </p>

        <p className=" flex  gap-2">
          <input type="checkbox" className="w-3" value={"Kids"} onChange={toggelCategory}/>Kids
        </p>

        <p className=" flex  gap-2">
          <input type="checkbox" className="w-3" value={"Baby"} onChange={toggelCategory}/>Baby
        </p>
      </div>

    </div>
    {/* Subcategory Filter */}
    {/*<div className={`border border-green-300 pl-5 py-3 my-5 ${ShowFilter ? "":"hidden"} sm:block`}>
      <p className="mb-3 text-sm font-medium "> TYPE</p>
      <div className=" flex flex-col gap-2 text-sm font-light text-gray-700">
        <p className=" flex  gap-2">
          <input type="checkbox" className="w-3" value={"Beauty&care "} onChange={toggelSubCategory}/>Beauty & PersonalCare
        </p>

        <p className=" flex  gap-2">
          <input type="checkbox" className="w-3" value={"Food"}onChange={toggelSubCategory}/>Food & Healthcare
        </p>

        <p className=" flex  gap-2">
          <input type="checkbox" className="w-3" value={"BabyCare"} onChange={toggelSubCategory}/>Baby Care
        </p>
      </div>
    </div>*/}
  </div>
  {/* right side */}
  <div className="flex-1">
    <div className="flex justify-between text-base sm:text-2xl mb-4">
      <Title text1={"ALL"} text2={"COLLECTIONS"}/>
      {/* Product Sort */}
      <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
        <option value="relavent">Sort by:Relavent</option>
        <option value="low-high">Sort by:Low to High</option>
        <option value="high-low">Sort by:High to Low</option>
      </select>
    </div>
    {/* MAP PRODUCTS */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
      {
        filterProducts.map((item,index)=>(
          <ProductItem key={index} name={item.name} id={item._id}  price={item.price} image={item.image} />
        ))
      }

    </div>
  </div>
  </div>
)
}
export default Collection
