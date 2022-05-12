import logo from './logo.svg';
import './App.css';
import ListCustomer from './Component/ListCustomer';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Routes, Route} from "react-router";


// import AddCustomer from './Component/AddCustomer';
import Form from './Component/Form';

import DeleteCustomer from './Component/DeleteCustomer';
import Roomdetails from './Component/Roomdetails';
import AddRoom from './Component/AddRoom';
import DeleteRoom from './Component/DeleteRoom';
import InventoryDetails from './Component/InventoryDetails';
import AddInventory from './Component/AddInventory';
import DeleteEmployee from './Component/DeleteEmployee';
import DeleteInventory from './Component/DeleteInventory';
import DepartmentDetails from './Component/DepartmentDetails';
import DeleteDepartment from './Component/DeleteDepartment';
import AddDepartment from './Component/AddDepartment';
import DeleteCheckOutCustomer from './Component/DeleteCheckOutCustomer';
import LoginButton from './Component/LoginButton';
import LogOutButton from './Component/LogOutButton';
import SignOut from './Component/SignOut';

function App() {
  return (
    <div >
      <Router>
       <div className="container">
         <nav>
           <Link to='/employee'> Home</Link>
           <Link to='/addCustomer'> Add Customer</Link>
           <Link to="/roomDetails">Room Details</Link>
           <Link to="/AddRoom">Add Room</Link>
           <Link to="/InventoryDetails">Inventory Details</Link>
           <Link to="/AddInventory">Add Inventory</Link>
           <Link to="/DepartmentDetails">Department Details</Link>
           <Link to="/AddDepartment">Add Department</Link>
           <Link to="/Signin">Sign In</Link>
         </nav>
                   
                   <Routes>
                     
                         <Route exact path='/'  element={<ListCustomer/>}/>
                         <Route path='/employee' element={<ListCustomer/>}/>
                         <Route path='/Form'    element={<Form/>}/>
                         <Route path='/addCustomer'    element={<Form/>}/> 
                         <Route path='/deleteCustomer' element={<DeleteCustomer/>}/>
                         <Route path='/roomDetails' element={<Roomdetails/>}/>
                         <Route path='/AddRoom' element={<AddRoom/>}/>
                         <Route path='/DeleteRoom' element={<DeleteRoom/>}/>
                         <Route path='/InventoryDetails' element={<InventoryDetails/>}/>
                         <Route path='/AddInventory' element={<AddInventory/>}/>
                         <Route path='/DeleteEmployee' element={<DeleteEmployee/>}/>     
                         <Route path='/DeleteInventory' element={<DeleteInventory/>}/> 
                         <Route path='/DepartmentDetails' element={<DepartmentDetails/>}/>
                         <Route path='/AddDepartment' element={<AddDepartment/>}/>
                         <Route path='/DeleteDepartment' element={<DeleteDepartment/>}/>
                         <Route path='/deleteCheckOutCustomer' element={<DeleteCheckOutCustomer/>}/>
                         <Route path='/Signin' element={<LoginButton/>}/>
                         <Route path='/SignOut' element={<SignOut/>}/>
                   </Routes>

                   
       </div>
  </Router>
  <main>

     <LogOutButton/>
    </main>
  </div>
  );
}

export default App;
