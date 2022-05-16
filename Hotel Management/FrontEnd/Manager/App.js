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
function App() {
  return (
    <Router>
  <div className='Container'>
         <nav>
         <Link to="/Home">Home</Link>
           <Link to="/roomDetails">Room Details</Link>
           <Link to="/AddRoom">Add Room</Link>
           <Link to="/InventoryDetails">Inventory Details</Link>
           <Link to="/AddInventory">Add Inventory</Link>
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
         </Routes>
  </div>
  <main>
    <Loginbutton/>
    <LogoutButton/>
      </main>
  </Router>
  )
}
export default App;
