import React,{useState} from "react";                                                              
import CustomerService from "../services/CustomerService";
import {useNavigate} from "react-router-dom";

import './Form.css'
import GuestService from "../services/GuestService";


function Form(){
 let navigate=useNavigate();

  const[name,setname]=useState('')
  const[adults,setadults]=useState('')
  const[status,setstatus]=useState('')
  const[numberOfnights,setnumberOfnights]=useState('')
  const[email,setemail]=useState('')
  const[phonenumber,setphonenumber]=useState('')
  const[gender,setgender]=useState('')
  const[address,setaddress]=useState('')
  const[checkindate,setcheckindate]=useState('')
  const[checkoutdate,setcheckoutdate]=useState('')
  const[roomrate,setroomrate]=useState('')
  const[roomNo,setroomNo]=useState('')
  const[updatedname,setupdatedname]=useState('')
  const[updatedstatus,setupdatedstatus]=useState('')
  const[updatedcheckoutdate,setupdatedcheckoutdate]=useState('')
  const[updatedroomNo,setupdatedroomNo]=useState('')
  const save=(e)=>{
      e.preventDefault();
      let Customer= { name : name , adults : adults , status : status , numberOfnights: numberOfnights,email : email ,phonenumber: phonenumber, gender:gender,address:address,checkindate:checkindate,checkoutdate:checkoutdate,roomrate:roomrate,roomNo:roomNo};
      console.log("Customer => " +JSON.stringify(Customer));
       
      CustomerService.createCustomer(Customer).then(res =>{navigate("/CustomerDetails")})
  }
  const Update=(e)=>{
    e.preventDefault();
    let CustomerUpdate= { updatedname : updatedname  , updatedstatus : updatedstatus ,updatedcheckoutdate:updatedcheckoutdate,updatedroomNo:updatedroomNo};
    console.log("Customer => " +JSON.stringify(CustomerUpdate));
     
    GuestService.Updatedetails(CustomerUpdate).then(res =>{navigate("/CustomerDetails")})
}
const Delete=(e)=>{
  e.preventDefault();
  navigate("/deleteCustomer")
}

const UpdateDelete=(e)=>{
  e.preventDefault();
  navigate("/deleteCheckOutCustomer")
}


  return(
  <div className="container"> 
          <form className="Addcustomer"> 
            
            <div className="Name"> <label>Name :</label> 
            <input type='text' value={name} onChange={e=>setname(e.target.value)} required/></div>
            
              <div className="Adults"> <label>No of Adults : </label>
              <input type="number" value={adults} onChange={e=>setadults(e.target.value)} required/></div>
            
               <div className="Status"><label>Status :</label> 
               <input type='text' value={status} onChange={e=>setstatus(e.target.value)} required/></div>
            
              <div className="Noofnights"><label>No of Nights :</label> 
              <input type='number' value={numberOfnights} onChange={e=>setnumberOfnights(e.target.value)} required/> </div>
             
              <div className="Email"> <label>Email :</label> 
              <input type='email' value={email} onChange={e=>setemail(e.target.value)} required/></div>
            
              <div className="phonenumber"> <label>Phonenumber :</label> 
              <input type="number" value={phonenumber} onChange={e=>setphonenumber(e.target.value)} required/></div>
            
             <div className="Gender"> <label>Gender :</label> 
             <input type='text' value={gender} onChange={e=>setgender(e.target.value)} required/></div>
            
             <div className="Address"> <label>Address :</label> 
             <input type='text' value={address} onChange={e=>setaddress(e.target.value)} required/></div>

             <div className="Checkin"> <label>Check-In-date :</label> 
             <input type='date' value={checkindate}  onChange={e=>setcheckindate(e.target.value)} required/></div>

             <div className="Checkout"> <label>Check-Out-date :</label> 
             <input type='date' value={checkoutdate} onChange={e=>setcheckoutdate(e.target.value)} required /></div>
            
             <div className="RoomRate"><label>Room-Rate :</label>
             <input type='number' value={roomrate} onChange={e=>setroomrate(e.target.value)} required /></div>
            
             <div className="RoomRate"><label>Room-No :</label>
             <input type='number' value={roomNo} onChange={e=>setroomNo(e.target.value)} required /></div>

             </form>
             <div className="saveDetails"> <button onClick={save} >Save</button></div>
              
             <div className="Delete"> <button onClick={Delete} >Delete</button></div>



            <form className="UpdateCustomer">
              
              <div className="Name"> <label>Name :</label> 
            <input type='text' value={updatedname} onChange={e=>setupdatedname(e.target.value)} required/></div>
            
            <div className="Status"><label>Status</label> 
            <input type='text' value={updatedstatus} onChange={e=>setupdatedstatus(e.target.value)} required/></div>
            
            <div className="Checkout"> <label>Check-Out-date :</label> 
            <input type='date' value={updatedcheckoutdate} onChange={e=>setupdatedcheckoutdate(e.target.value)} required/></div>

            <div className="RoomRate"><label>Room-No :</label>
            <input type='number' value={updatedroomNo} onChange={e=>setupdatedroomNo(e.target.value)} required/></div>
            
            </form>

            <div className="updatedDetails"> <button onClick={Update} >Update</button></div>
            <div className="delete"> <button onClick={UpdateDelete} >Delete</button></div>
            
        
        </div>
    )



}
export default Form 