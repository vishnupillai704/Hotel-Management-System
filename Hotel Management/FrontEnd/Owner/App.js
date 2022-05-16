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
function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/CustomerDetails">Customer Details</Link>
        <Link to="/RoomDetails">Room Details</Link>
        <Link to="/InventoryDetails">Inventory Details</Link>
        <Link to="/DepartmentDetails">Department Details</Link>
        <Link to="/AddDepartment">Add Department</Link>
        
      </nav>
      <Routes>
       
        <Route path="/CustomerDetails" element={<PrivateRoute component={ListCustomer}/>} />
        <Route path='/RoomDetails' element={<PrivateRoute component={Roomdetails}/>}/>
        <Route path='/InventoryDetails' element={<PrivateRoute component={InventoryDetails}/>} />
        <Route path='/DepartmentDetails' element={<PrivateRoute component={DepartmentDetails}/> }/>
        <Route path='/AddDepartment' element={<PrivateRoute component={AddDepartment}/>}/>
         <Route path="/DeleteDepartment" element={<PrivateRoute component={DeleteDepartment}/>}/>         
      </Routes>
    
     
      
    </div>
    <main>
      <LoginButton/>
      <LogoutButton/>
    </main>
    </Router>
  );
}

export default App;
