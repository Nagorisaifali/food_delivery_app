import React from 'react'
import image1 from "../assets/image1.avif" 
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Card = ({name , image , id , price , type}) => {
    
    let dispatch = useDispatch() ; 

  return (
    <>
        <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300  '>
            <div  className='w-[100%] h-[60%] overflow-hidden rounded-lg object-cover '>
                <img src= {image } alt="" />
            </div>
            <div className='text-2xl font-semibold  '>
                {name}
            </div>
            <div className='w-full flex justify-between items-center '>
                <div className='text-green-500  text-lg font-bold '>{price}</div>
                <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-bold'>{type === 'veg' ? <LuLeafyGreen /> : <GiChickenOven /> }<span>{type}</span></div>
            </div>
            <button className='w-full p-3 bg-green-500 rounded-lg text-white hover:bg-green-400 transition-all '  onClick={() => {dispatch(AddItem({id:id , name : name , price : price , image :image ,qty :1 })) ; toast.success("Item Added")  }  }>Add to dish</button>
        </div>
    </>
  )
}

export default Card


