import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import ListCustomer from './Components/ListCustomer'
import Roomdetails from './Components/Roomdetails'
import InventoryDetails from './Components/InventoryDetails'
import DepartmentDetails from './Components/DepartmentDetails'
import AddDepartment from './Components/AddDepartment'
import DeleteDepartment from './Components/DeleteDepartment';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogOutButton';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home';
import Footer from './Components/Footer';
import PaymentDetails from './Components/PaymentDetails';
function App() {
  return (
    <div>
    <Router>
    <div className="App">
      <nav className='Links' >
        <Link className='Home' to="/Home">Home</Link>
        <Link className='CustomerDetails' to="/CustomerDetails">Customer Details</Link>
        <Link className='RoomDetails' to="/RoomDetails">Room Details</Link>
        <Link className='InventoryDetails' to="/InventoryDetails">Inventory Details</Link>
        <Link className='DepartmentDetails' to="/DepartmentDetails">Department Details</Link>
        <Link className='AddDepartment' to="/AddDepartment">Add Department</Link>  
      </nav>
      <Routes>
       
        <Route path="/CustomerDetails" element={<PrivateRoute component={ListCustomer}/>} />
        <Route path='/RoomDetails' element={<PrivateRoute component={Roomdetails}/>}/>
        <Route path='/InventoryDetails' element={<PrivateRoute component={InventoryDetails}/>} />
        <Route path='/DepartmentDetails' element={<PrivateRoute component={DepartmentDetails}/> }/>
        <Route path='/AddDepartment' element={<PrivateRoute component={AddDepartment}/>}/>
         <Route path="/DeleteDepartment" element={<PrivateRoute component={DeleteDepartment}/>}/>
         <Route path="/Home" element={<Home/>}/>         
         <Route path="/PaymentDetails" element={<PrivateRoute component={PaymentDetails}/>}/>
      </Routes>
    
     
      
    </div>
    <main className='Signup'>
      <LoginButton/>
      <LogoutButton/>
    </main>
    </Router>
    <section className='MainFooter'>
      <Footer/>
    </section>
    </div>
  );
}

export default App;
