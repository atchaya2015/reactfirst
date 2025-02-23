import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Headerfile from './components/Headerfile';
import Home from './components/Home';
import ViewCart from './components/ViewCart';
import { createContext, useState } from 'react';

export const cartContext= createContext();

function App() {
  const [cart,setCart] = useState([]);
  return (
    
    <cartContext.Provider value = {{cart,setCart}}>

<BrowserRouter>
    <Headerfile cart={cart}/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<ViewCart/>} />
      </Routes>
    </div>
    </BrowserRouter>

    </cartContext.Provider>
    
 
  
    
  );
}

export default App;
