import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/cartSlice';
import {toast} from 'react-hot-toast';

const Product = ({post}) => {
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }
    
    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    }

  return (
    <div className='flex flex-col items-center justify-between mx-4 my-4  bg-white
    card w-30 h-75 m-2 p-4 sm:w-1/2 md:w-1/3 lg:w-1/5 border rounded-lg 
    hover:scale-110 transition duration-300 ease-in 
    hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
       <div>
          <p className='text-gray-700 font-semibold text-lg text-left'>{post.title.split(" ").slice(0,3).join(" ") + "..."}</p>
       </div>
       <div>
           <p className='w-40 text-gray-400 font-normal text-[12px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..." }</p>
       </div>
       <div className='h-[180px]'>
           <img src={post.image} alt="productImage" className='h-full w-full'/>
        </div>
        <div className='flex justify-between gap-11 items-center w-full mt-5'>
           <div className='text-green-600 font-semibold '>
               <p>Rs. {post.price}</p>
           </div>
            {
               cart.some((p) => p.id == post.id) ? 
               (<button
               className='text-gray-700  border-2 border-gray-700 rounded-full font-semibold
               text-[12px] p-1 px-3 uppercase
               hover:text-white hover:bg-gray-700
                hover:scale-105 transition duration-300 ease-in'
               onClick={removeFromCart}
               >
                Remove Item
               </button>)
               :
               (<button
                 className='text-gray-700  border-2 border-gray-700 rounded-full font-semibold
               text-[12px] p-1 px-3 uppercase
               hover:text-white hover:bg-gray-700
                hover:scale-105 transition duration-300 ease-in'
               onClick={addToCart}
               >
                Add to Cart
               </button>)           
            }
        </div>
    </div>
  );
};

export default Product
