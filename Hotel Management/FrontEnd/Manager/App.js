import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import RoomInformation from './Components/RoomInformation';
import RoomAddition from './Components/RoomAddition';
import InventoryInformation from './Components/InventoryInformation';
import InventoryAddition from './Components/InventoryAddition';
import Home from './Components/Home';
import LogoutButton from './Components/Logoutbutton';
import DeleteRooms from './Components/DeleteRooms';
import DeleteEmployees from './Components/DeleteEmployees';
import Deleteinventories from './Components/Deleteinventories';
import Loginbutton from './Components/Loginbutton'
import PrivateRoutesManager from './Components/PrivateRoutesManager'
import Footer from './Components/Footer';
import EmployeeAddition from './Components/EmployeeAddition';
function App() {
  return (
    <div>
    <Router>
  <div className='Container'>
         <nav className='Links' >
         <Link className='Home'  to="/Home">Home</Link>
           <Link className='roomDetails' to="/roomDetails">Room Details</Link>
           <Link className='AddRoom' to="/AddRoom">Add Room</Link>
           <Link className='InventoryDetails' to="/InventoryDetails"> Details</Link>
           <Link className='AddInventory' to="/AddInventory">Add Inventory</Link>
           <Link className='AddEmployee' to="/AddEmployee">Add Employee</Link>
         </nav>
         <Routes>
         <Route path='/roomDetails' element={<PrivateRoutesManager component={RoomInformation}/>}/>
         <Route path='/AddRoom' element={<PrivateRoutesManager component={RoomAddition}/>}/>
         <Route path='/InventoryDetails' element={<PrivateRoutesManager component={InventoryInformation}/>}/>
         <Route path='/AddInventory' element={<PrivateRoutesManager component={InventoryAddition}/>}/>
         <Route path="/Home" element={<Home/>}/>
         <Route path='/DeleteRoom' element={<PrivateRoutesManager component={DeleteRooms}/>}/>
         <Route path='/DeleteEmployee' element={<PrivateRoutesManager component={DeleteEmployees}/>}/>     
         <Route path='/DeleteInventory' element={<PrivateRoutesManager component={Deleteinventories}/>}/>
         <Route path="/AddEmployee" element={<PrivateRoutesManager component={EmployeeAddition}/>}/>
         </Routes>
  </div>
  <main className='Loginb' >
    <Loginbutton />
    <LogoutButton/>
      </main>
  </Router>
  <section className='MainFooter'>
    <Footer/>
  </section>
  </div>

  )
}
export default App;
