import React from 'react'
import { NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
import {add_icon} from '../assets/assets'
import { list } from '../assets/assets'
import { order_icon } from '../assets/assets'
// import {}
const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

                <NavLink className='flex items-centre gap-3 border border-gay-300 border-r-0 px-3 py-2 rounded-l' to="/add">
                   {/* <img className='w-5 h-5' scr={assets.logo} alt="" /> */}
                   
                   <img className='h-5 w-5' src={assets.add_icon} alt="" />
                   <p className='hidden md:block'>Add Items</p>
                   </NavLink>

                   <NavLink className='flex items-centre gap-3 border border-gay-300 border-r-0 px-3 py-2 rounded-l' to="/list">
                   <img src={assets.list} className='h-5 w-5' alt="" />
                   <p className='hidden md:block'>List Items</p>
                   </NavLink>


                   <NavLink className='flex items-centre gap-3 border border-gay-300 border-r-0 px-3 py-2 rounded-l' to="/orders">
                   <img className='w-5 h-5'src={assets.order_icon} alt="" />
                   <p className='hidden md:block'>Orders</p>
                   </NavLink>

            </div>
        </div>
    )
}

export default Sidebar