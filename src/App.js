import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/blog' element={<Blog></Blog>}>Home</Route>
        <Route path='/login' element={<Login></Login>}>Home</Route>
        <Route path='/signup' element={<Signup></Signup>}>Home</Route>
      </Routes>
      
    </div>
  );
}

export default App;
