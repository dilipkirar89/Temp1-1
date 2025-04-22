import React from "react";
import assets from "../assets/assets";
import { exchange,Return,Customer } from "../assets/assets";

const OurPolicy=()=>{
    return(
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
            <div>
                <img src={assets.exchange} className="w-12 m-auto mb-5" alt="" />
                <p className="font-semibold">Eassy Exchange Policy</p>
                <p className="text-gray-400">We offer free exchange policy</p>
            </div>


            <div>
                <img src={assets.Return} className="w-12 m-auto mb-5" alt="" />
                <p className="font-semibold">Return Policy</p>
                <p className="text-gray-400"> Only Packed items are  Exchange</p>
            </div>


            <div>
                <img src={assets.Customer} className="w-12 m-auto mb-5" alt="" />
                <p className="font-semibold">Best Customer Support</p>
                <p className="text-gray-400">We offer best Customer support </p>
            </div>
        </div>
        
    )
}
export default OurPolicy