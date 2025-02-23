import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const Headerfile = ({cart}) => {
  return (
  <div className='nav'>
    <div className='logo'>Food Zone</div>
    <ul>
        <li><Link to={"/"}>Home</Link></li>
    
    <li><Link to={"/Cart"}><span className='cart-count'>{cart.length}</span>Cart</Link></li>
    </ul>

  </div>)
}

export default Headerfile
