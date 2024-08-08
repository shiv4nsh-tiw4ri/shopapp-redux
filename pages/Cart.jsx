import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem'



const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce((acc,curr) => acc+curr.price,0))
  },[cart])

  return (
    <div className=''>
     {
      cart.length > 0 ?
      (<div className='flex flex-row mx-auto  max-w-6xl justify-center'>  
           <div className='w-[60%]'>
           {
             cart.map((item,index) => {
              return  <CartItem key={item.id} item={item} itemIndex={index} cartLength={cart.length}/>
           })
           }
           </div>
           <div className='flex flex-col  md:w-[40%] mt-5 w-full '>
             <div className='flex flex-col m-4 h-full gap-y-1'>
                <div className='text-md text-green-600 font-bold uppercase'>Your Cart</div>
                <div className='text-4xl font-bold text-green-600 uppercase'>Summary</div>
                <p className='mt-2'>
                  <span className='font-semibold text-gray-600'>Total Items: {cart.length}</span>
                </p>
              </div>
              <div className='flex flex-col m-4 space-y-3 w-full'>
                  <p className='font-semibold text-gray-600'>Total Amount: <span className='text-gray-900'>₹{totalAmount}</span></p>
                  <button
                  className='text-white bg-green-700   px-9 py-2 
                     rounded-md uppercase font-semibold border-2 border-green-700
                     hover:text-green-700 hover:bg-white 
                     hover:scale-105 transition duration-300 ease-in
                     hover:shadow-[rgba(0,_0,_0.2,_0.4)_4px_6px_10px]'
                  >
                    CheckOut Now
                  </button>
              </div>
            


           </div>



      </div>) 
      :
      (
        <div className='flex flex-col w-full h-[80vh] justify-center items-center mb-[20px]'>
        <h1 className='text-xl font-semibold text-gray-500 '>Your cart is empty!</h1>
        <NavLink to={"/"}>
          <button 
          className='text-white bg-green-700 m-4 px-9 py-2 
          rounded-md uppercase font-semibold border-2 border-green-700
          hover:text-green-700 hover:bg-white 
          hover:scale-110 transition duration-300 ease-in
          hover:shadow-[rgba(0,_0,_0.2,_0.4)_4px_6px_10px]'>
              Shop Now
          </button>
        </NavLink>
        </div>
      )
     }
    </div>
  )
}

export default Cart
