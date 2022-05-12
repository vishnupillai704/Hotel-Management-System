import React,{useState} from "react"; 
import {useNavigate} from "react-router-dom";
import CustomerService from "../services/CustomerService";

function DeleteCustomer(){
    let navigate=useNavigate();
    const[id,setID]=useState('')
    const save=(e)=>{
        e.preventDefault();
        let Customer= id
        console.log("Customer => " +JSON.stringify(Customer));
         
        CustomerService.Deletedetails(Customer).then(res =>{navigate("/employee")})
    }
  
    return(
        <div className="container"> 
            <h1>Please Enter Customer Id You want to delete:</h1>
                <form> 
                    <div className="Id"> <label>id :</label> 
                  <input type='number' value={id} onChange={e=>setID(e.target.value)}/></div>
                  <div className="save"> <button onClick={save} >Save</button></div>
                  </form>
                  </div>
    );
}
export default DeleteCustomer;