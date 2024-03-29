import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Purchase from './pages/Purchase/Purchase';
import RequireAuth from './RequireAuth';
import Notfound from './pages/Notfound/Notfound';

import Dashboard from './pages/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import MyAppionment from './pages/Dashboard/MyAppionment';
import MyReview from './pages/Dashboard/MyReview';
import Footer from './pages/Shared/Footer/Footer';
import Reviews from './pages/Reviews/Reviews';
import AddReview from './pages/Dashboard/AddReview';
import AddItem from './pages/AddItem/AddItem';
import ManageOrder from './pages/Manage/ManageOrder';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/blog' element={<Blog></Blog>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/addItem' element={<AddItem></AddItem>}></Route> */}
        {/* <Route path='/manageOrder' element={<ManageOrder></ManageOrder>}></Route> */}
        
       
        <Route path='*' element={<Notfound></Notfound>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/purchase' element={
        <RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>
        }>

        </Route>
        {/* <Route path='/reviews' element={
        <RequireAuth>
         <Reviews></Reviews>
        </RequireAuth>
        }>
          
        </Route> */}
        <Route path='/dashboard' element={
        <RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>
        }>
         <Route index element={<MyAppionment></MyAppionment>}></Route>
         <Route path='myReview' element={<MyReview></MyReview>}></Route>
         <Route path='addReview' element={<AddReview></AddReview>}></Route>

        </Route>
      </Routes>
      <ToastContainer />
      
      
    </div>
  );
}

export default App;
