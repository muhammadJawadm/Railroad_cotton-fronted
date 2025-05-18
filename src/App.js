import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ProductDetail from './pages/product-detail';
import RailroadCottonExchange from './pages/railroad-cotton-exchange';
import CheckOut from './pages/checkout';
import Cart from './pages/cart';
import ContactUs from './pages/contact-us';
import AboutUs from './pages/about-us';
import Login from './pages/login';
import Register from './pages/register';
import { Check } from 'lucide-react';
import OrderSummary from './pages/order-summary';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<ProductDetail/>} />
        <Route path="/Railroad" element={<RailroadCottonExchange/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path='/OrderSummary' element={<OrderSummary/>} />
        <Route path="/CheckOut" element={<CheckOut/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}
export default App;
