import React,{useState} from "react";
import {useRef} from  "react";                                                            
import CustomerService from "../services/CustomerService";
import {useNavigate} from "react-router-dom";
import emailjs from '@emailjs/browser';
import './Form.css'
import GuestService from "../services/GuestService";
import front1 from './front1.jpg';
import front from './front.jpg';

function Form(){
 let navigate=useNavigate();
  const[id,setId]=useState('')
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
  const form = useRef();
  const save=(e)=>{
       e.preventDefault();
      let Customer= { name : name , adults : adults , status : status , numberOfnights: numberOfnights,email : email ,phonenumber: phonenumber, gender:gender,address:address,checkindate:checkindate,checkoutdate:checkoutdate,roomrate:roomrate,roomNo:roomNo};
      console.log("Customer => " +JSON.stringify(Customer));
       
      CustomerService.createCustomer(Customer).then(res =>{navigate("/CustomerDetails")})
  }
  const update=(e)=>{
    e.preventDefault();
    let Customer= { id:id, name : name , adults : adults , status : status , numberOfnights: numberOfnights,email : email ,phonenumber: phonenumber, gender:gender,address:address,checkindate:checkindate,checkoutdate:checkoutdate,roomrate:roomrate,roomNo:roomNo};
    console.log("Customer => " +JSON.stringify(Customer));
    CustomerService.updateCustomer(Customer).then(res=>{navigate("/CustomerDetails")})
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
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_lv8uycn', 'template_3ayjqh3', form.current, 'wYmP5xOUNBbl2dhk5')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


  return(
  <div className="container"> 
           <div><h1 className="AddGuest"> Add Guest</h1>
           <h1 className="UpdateGuest"> Update Guest</h1></div>
          <form className="Addcustomer" ref={form} onSubmit={sendEmail} > 
            
            <div className="ID" ><label>Id:</label>
            <input type="number" value={id} placeholder="Only for Update" onChange={e=>setId(e.target.value)} /></div>

            <div className="Name"> <label>Name :</label> 
            <input type='text' value={name} name="to_name" title="Name of the Customer" onChange={e=>setname(e.target.value)} required/></div>
            
              <div className="Adults"> <label>No of Adults : </label>
              <input type="number" value={adults}  pattern="^\d{6}$" title="Maximum No of Adults is 6" onChange={e=>setadults(e.target.value)} required='adult'/></div>
            
               <div className="Status"><label>Status :</label> 
               <input type='text' value={status} title="Check-In"onChange={e=>setstatus(e.target.value)} required/></div>
            
              <div className="Noofnights"><label>No of Nights :</label> 
              <input type='number' value={numberOfnights}  pattern="^\d{10}$" title="Maximum no of Nights 10"   onChange={e=>setnumberOfnights(e.target.value)} required/> </div>
             
              <div className="Email"> <label>Email :</label> 
              <input type="email" value={email} name="to_email" title="Must Contain @"onChange={e=>setemail(e.target.value)} required/></div>
            
              <div className="phonenumber"> <label>Phonenumber :</label> 
              <input type="tel" value={phonenumber}  pattern="^\d{10}$" title="Max digits 10" onChange={e=>setphonenumber(e.target.value)} required/></div>
            
             <div className="Gender"> <label>Gender :</label> 
             <input type='text' value={gender} title="Customer Gender" onChange={e=>setgender(e.target.value)} required/></div>
            
             <div className="Address"> <label>Address :</label> 
             <input type='text' value={address} title="Customer Address"onChange={e=>setaddress(e.target.value)} required/></div>

             <div className="Checkin"> <label>Check-In-date :</label> 
             <input type='date' value={checkindate} name="Check_In" onChange={e=>setcheckindate(e.target.value)} required/></div>

             <div className="Checkout"> <label>Check-Out-date :</label> 
             <input type='date' value={checkoutdate} name="Check_Out" onChange={e=>setcheckoutdate(e.target.value)} required /></div>
            
             <div className="RoomRate"><label>Room-Rate :</label>
             <input type='number' value={roomrate} name="Payment_Amount"pattern="^\d{5}$" title="Room Rate" onChange={e=>setroomrate(e.target.value)} required /></div>
            
             <div className="RoomNo"><label>Room-No :</label>
             <input type='number' value={roomNo} name="Room_No" title="Room No" onChange={e=>setroomNo(e.target.value)} required /></div>
              <input className="SubmitCustomer" type="submit" value="Send Email"   />
             </form>
            <div className="Save"><button onClick={save} >Save</button></div>
             <div className="UPDATE"><button onClick={update}>Update</button></div>              
             <div className="Delete"> <button onClick={Delete} >Delete</button></div>



            <form className="UpdateCustomer" onSubmit={Update}>
              
              <div className="NameC"> <label>Name :</label> 
            <input type='text' value={updatedname} onChange={e=>setupdatedname(e.target.value)} required/></div>
            
            <div className="StatusC"><label>Status :</label> 
            <input type='text' value={updatedstatus} onChange={e=>setupdatedstatus(e.target.value)} required/></div>
            
            <div className="CheckoutC"> <label>Check-Out-date :</label> 
            <input type='date' value={updatedcheckoutdate} onChange={e=>setupdatedcheckoutdate(e.target.value)} required/></div>

            <div className="RoomNoC"><label>Room-No :</label>
            <input type='number' value={updatedroomNo} onChange={e=>setupdatedroomNo(e.target.value)} required/></div>
            <input className="submitForm" type="submit" value="Update" />
            </form>

            <div className="delete"> <button onClick={UpdateDelete} >Delete</button></div>
             
             <img className="front1" src={front1} alt="front reception" width={450}  height={300}/>
             <img className="front" src={front} alt="front reception 2" width={450} height={300}/>
              <div className="Quote"><h1>You are serving a customer, not a life sentence. Learn how to enjoy your work.</h1></div> 
           
        </div>
    )



}
export default Form 