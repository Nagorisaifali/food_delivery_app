import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import  Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food.js'
import { dataContext } from '../context/UserContext.jsx'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2.jsx'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Home = () => {

  let {cate , setCate , input , showCart , setShowCart} = useContext(dataContext)

  function filter(category){
    if(category === "All"){
      setCate(food_items) ; 
    }else{
      let newList = food_items.filter((item) => ( item.food_category === category ))
      setCate(newList) ; 
    }
  }

  let items = useSelector(state=> state.cart) ;
  
  let subtotal = items.reduce((total , item)=>total + item.qty * item.price , 0)
  let deliveryFee = 20 ; 
  let taxes = subtotal*0.5/100 ; 
  let total = Math.floor(subtotal + deliveryFee + taxes) ; 
  

  return (
    <div className='bg-slate-200 w-full min-h-[100vh]'>
      <Nav/>



        <div className='w-full min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between px-5 md:px-10 lg:px-20 py-10 gap-10'> {/* LEFT SIDE */} 
          <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className='w-full lg:w-[50%]' >
             <h1 className='text-4xl md:text-6xl font-bold leading-tight text-gray-800'> Delicious Food <span className='text-green-500'> Delivered </span> To Your Door </h1>
              <p className='mt-6 text-lg text-gray-600 leading-8'> Order your favorite food online with fast delivery and amazing offers. </p> 
              <div className='mt-8 flex flex-wrap gap-5'> <button className='bg-green-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300'> Order Now </button> <button className='border-2 border-green-500 text-green-500 px-8 py-4 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300'> Explore Menu </button> </div> 
              </motion.div> {/* RIGHT SIDE */} <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className='w-full lg:w-[50%] flex justify-center' > 
                <img src='https://cdn-icons-png.flaticon.com/512/5787/5787016.png' alt='food' className='w-[280px] md:w-[420px] animate-bounce' /> </motion.div> </div>



    {/* ////////////////// */}


      {!input ?  
      <div className='flex flex-wrap justify-center items-center gap-5 w-[100%] '>
        { Categories.map((item) => {
            return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl  hover:bg-green-200  cursor-pointer transition-all duration-200'  onClick={()=>filter(item.name)}>
                {item.icon} 
                {item.name} 
            </div>
        })}
      </div>
      : null} 

        

      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>

      {cate.length > 1 ? 

        cate.map((item) => (
          <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        )) 

        : <div className='text-5xl font-bold text-green-500'><h1>No Dish Found </h1></div> }

      </div>
    
      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6  transition-all duration-500 overflow-auto ${ showCart ? "translate-x-0" : "translate-x-full"}` }>
        <header className='w-[100%] flex justify-between items-center '>
          <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
          <RxCross2 className=' w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={() => setShowCart(false)}/>
        </header>

        {items.length>0 ? 

        <>

        <div className='w-full mt-9 flex flex-col gap-8 '>
          {items.map((item) => (
            <Card2 name={item.name} price={item.price} image = {item.image} id={item.id} qty={item.qty} />
          ))}
        </div>


          <div className='w-[full] border-t-2 border-b-2 border-gray-400 mt-7  flex flex-col gap-2 p-8 '>
              <div className='w-full flex justify-between items-center '>
                <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
                <span className='text-green-400 font-semibold text-lg'> Rs {subtotal}</span>
              </div>
              <div className='w-full flex justify-between items-center '>
                <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
                <span className='text-green-400 font-semibold text-lg'> Rs {deliveryFee}</span>
              </div>
              <div className='w-full flex justify-between items-center '>
                <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                <span className='text-green-400 font-semibold text-lg'> Rs {taxes}</span>
              </div>
          </div>

          
              <div className='w-full flex justify-between items-center p-9'>
                <span className='text-2xl text-gray-600 font-semibold'>Total</span>
                <span className='text-green-400 font-semibold text-2xl '> Rs {total}</span>
              </div>

              <div className='flex items-center justify-center'>
                <button className='w-[80%] p-3 bg-green-600 rounded-lg text-white hover:bg-green-400 transition-all  '   onClick={() => { toast.success("Order Placed") }}>Place Order</button>

              </div>

              </> 

          : <div className='flex justify-center items-center text-center text-5xl font-bold text-green-600 pt-5'>
            Empty Card 
          </div> }
            
      </div>
      
      

    </div>
  )
}

export default Home
