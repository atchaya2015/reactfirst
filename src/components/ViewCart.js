import React, { useEffect, useState } from 'react';
import "./ViewCart.css";
import  { useContext } from 'react';
import { cartContext } from '../App';

const ViewCart = () => {
  const {cart} = useContext(cartContext)
  const [total,setTotal]= useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0));
  },[cart]);

  return (
    <>
    <h1 className='cart-heading'>Cart Products</h1>
    <div className='cart-container'>
      {
        cart.map((product)=>(
          <div className='cart-product'>
        <div className='img'>
          <img src={product.pic} alt="image"/>
        </div>
        <div className='cart-product-details'>
          <h5>{product.name}</h5>
          <p>Price Rs:{product.amt}</p>
        </div>


      </div>

        ))
      }
      
      
    </div>
    <h1 className='cart-amt'>Total Amount Rs:{total}</h1>
    
    </>
  )
}

export default ViewCart
