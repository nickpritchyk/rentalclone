import './App.css';
import About from './pages/About';
import Home from './pages/Home';
// import Rent from './pages/Rent'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/rent'></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
