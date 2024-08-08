import {toast} from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";

const CartItem = ({item,itemIndex,cartLength}) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
       dispatch(remove(item.id));
       toast.success("Item Removed");
    }

    return (
        <div className='flex flex-col  w-full p-2'>
            <div className='flex w-full p-2 md:p-5 gap-5  items-center justify-between mt-1 mb-2 md:mx-5 p-2'>
              <div className='flex flex-col md:flex-row p=0 md:p-3 gap-5 items-center w-full'>
                <div className='w-[30%]'>
                    <img src={item.image} alt='Product Image' className='object-cover  '/>
                </div>
                <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
                    <h1 className='text-gray-700 text-lg font-semibold mb-3'>
                    {item.title}</h1>
                    <h1 
                    className='text-gray-400 text-[14px]'
                    >{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
                    <div className='flex justify-between items-center mt-[15px]'>
                        <p className='text-lg text-green-500 font-bold'>₹{item.price}</p>
                        <button
                        className='  p-2 bg-red-200 group hover:bg-red-400 transition duration-300 ease-in cursor-pointer  rounded-full p-3 mr-3'
                        onClick={removeFromCart}
                        >
                           <MdDelete className='text-red-800 group-hover:text-white h-[1rem] w[1rem]'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {itemIndex !== cartLength - 1 && (
            <hr className="h-[0.08rem] bg-gray-200 border-0 dark:bg-slate-700"/> 
        )}
        </div>
    )
}

export default CartItem