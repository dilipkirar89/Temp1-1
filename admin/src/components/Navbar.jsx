import React from 'react';
import assets from '../assets/assets'
// import { logo } from '../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setToken}) => {
    return (
        <div className='flex items-center py-2 px-[4%] justify-between bg-red-000'>
             {/* <img className='w-[max(10%,80px)]' scr={assets.logo}  alt="" /> */}
        <Link to="/">  <img src={assets.logo} alt="" className="w-28" /></Link>  
          
             <button onClick={() =>setToken('')}className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>logout</button>
       </div>
    )
}

export default Navbar