import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal=()=>{
    const {currency,getCartAmount,Delivery_fee}=useContext(ShopContext)
    return(
        <div className="w-full px-10">
            <div className="text-2xl">
        <Title text1={"CART"} text2={"ToTALS"}/>
            </div>
            <div>
                <div className="flex justify-between">

                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shipping fee</p>
                    <p>{currency}{Delivery_fee}.00</p>

                </div>
                <hr />
                <div>
                    <b>Total</b>
                    <b>{currency} {getCartAmount()===0 ? 0 : getCartAmount() + Delivery_fee}</b>
                    {/* <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee }</b> */}
                </div>
            </div>
        </div>
    )
}
export default CartTotal