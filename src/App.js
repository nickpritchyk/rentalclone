import './App.css';
import About from './pages/About';
import Home from './pages/Home';
// import Rent from './pages/Rent'
import CartPage from './pages/CartPage'
import { Shop } from './pages/Shop'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';

function App() {

  return (
    <>
      <ShopContextProvider>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/cart' element={<CartPage />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
          </Routes>
        </div>
      </ShopContextProvider>
    </>
  );
}

export default App;
