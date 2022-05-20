import logo from './logo.svg';
import './App.css';
import ListCustomer from './Component/ListCustomer';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import Form from './Component/Form';
import DeleteCustomer from './Component/DeleteCustomer';
import Roomdetails from './Component/Roomdetails';
import DeleteCheckOutCustomer from './Component/DeleteCheckOutCustomer';
import LogOutButton from './Component/LogOutButton';
import SignOut from './Component/SignOut';
import Home from './Component/Home';
import LoginButton from './Component/LoginButton';
import './App.css';
import PrivateRoutes from './Component/PrivateRoutes';
import RoomPhotos from './Component/RoomPhotos';
import Footer from './Component/Footer';
import Payment from './Component/Payment';
function App() {
  return (
    <div >
      <Router>
       <div className="container">
         <nav className="Link">
           <Link className='home' to='/home'> Home</Link>
           <Link className='Customer' to="/CustomerDetails">Customer Details</Link>
           <Link className='AddCustomer' to="addCustomer">Add Customer</Link>
           <Link className='roomDetails' to="/roomDetails">Room Details</Link>
           <Link className='paymentDetials' to='/payment'>Payment</Link>
           <Link className='roomPhotos' to="/roomPhotos">Room Photos</Link>
         </nav>
                   <Routes>
                         <Route exact path='/home'  element={<Home/>}/>
                         <Route path='/CustomerDetails' element={<PrivateRoutes component={ListCustomer}/>}/>
                         <Route path='/addCustomer'    element={<PrivateRoutes component={Form}/>}/>        
                         <Route path='/deleteCustomer' element={<PrivateRoutes component={DeleteCustomer}/>}/>
                         <Route path='/roomDetails' element={<PrivateRoutes component={Roomdetails}/>}/>
                         <Route path='/roomPhotos' element={<RoomPhotos/>}/> 
                         <Route path='/deleteCheckOutCustomer' element={<PrivateRoutes component={DeleteCheckOutCustomer}/>}/>
                         <Route path='/SignOut' element={<SignOut/>}/>
                         <Route path='/payment' element={<PrivateRoutes component={Payment}/>}/>
                   </Routes>    
       </div>
  </Router>
  <main className='SignIn'>
    < LoginButton className='Login' />
     <LogOutButton />
    </main>
    <section className='MainFooter'>
      <Footer/>
    </section>
  </div>
  );
}

export default App;
