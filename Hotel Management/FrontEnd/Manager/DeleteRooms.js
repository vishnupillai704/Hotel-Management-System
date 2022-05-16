import React,{useState} from "react";    
import {useNavigate} from "react-router-dom";
import RoomService from "../services/RoomService";

function DeleteRooms(){

    let navigate=useNavigate();
    const[id,setID]=useState('')

    const save=(e)=>{
        e.preventDefault();
        let Customer= id ;
        console.log("Customer => " +JSON.stringify(Customer));
         
        RoomService.DeleteRoomdetails(Customer).then(res =>{navigate("/roomDetails")})
    }
    
    return(
<div className="container"> 
          <h1>Please Enter Room ID You want to Delete </h1>
          <form> 
              <div className="Id"> <label>id :</label> 
            <input type='number' value={id} onChange={e=>setID(e.target.value)}/></div>
            <div className="save"> <button onClick={save} >Save</button></div>
            </form>

        </div>
    )
}
export default DeleteRooms;