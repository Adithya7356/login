import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Homepage from './components/home/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Product from './components/product/Product';
import Book from './components/book/Book';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/" element={<Product/>} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/Book' element={<Book/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
