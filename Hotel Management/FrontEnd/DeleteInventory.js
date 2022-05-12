import React,{useState} from "react"; 
import {useNavigate} from "react-router-dom";
import InventoryService from "../services/InventoryService";
function DeleteInventory(){

    let navigate=useNavigate();
    const[iD,setiD]=useState('')
    const save=(e)=>{
        e.preventDefault();
        let Inventory= iD
        console.log("Customer => " +JSON.stringify(Inventory));
         
        InventoryService.DeleteInventoryDetails(Inventory).then(res =>{navigate("/InventoryDetails")})
    }
  
    return(
        <div className="container"> 
            <h1>Please Enter Inventory Id You want to delete:</h1>
                <form> 
                    <div className="Id"> <label>id :</label> 
                  <input type='number' value={iD} onChange={e=>setiD(e.target.value)}/></div>
                  <div className="save"> <button onClick={save} >Save</button></div>
                  </form>
                  </div>
    );
}
export default DeleteInventory;