import React,{useState} from "react";                                                              

import {useNavigate} from "react-router-dom";
import RoomService from "../services/RoomService";

function AddRoom(){
    let navigate=useNavigate();
    const[id,setID]=useState('')
    const[roomNo,setroomNo]=useState('')
    const[roomType,setroomType]=useState('')
    const[floorNo,setfloorNo]=useState('')
    const[noOfbeds,setnoOfbeds]=useState('')
    const[roomRate,setroomRate]=useState('')

    const save=(e)=>{
        e.preventDefault();
        let Room= { id : id,roomNo:roomNo,roomType:roomType,floorNo:floorNo,noOfbeds:noOfbeds,roomRate:roomRate};
        console.log("Customer => " +JSON.stringify(Room));
         
        RoomService.postRoomdetails(Room).then(res =>{navigate("/roomDetails")})
    }
    const Update=(e)=>{
        e.preventDefault();
        let RoomUpdate= { id : id,roomNo:roomNo,roomType:roomType,floorNo:floorNo,noOfbeds:noOfbeds,roomRate:roomRate};
        console.log("Customer => " +JSON.stringify(RoomUpdate));
         
        RoomService.UpdateRoomdetails(RoomUpdate).then(res =>{navigate("/roomDetails")})
    }

    const Delete=(e)=>{
        e.preventDefault();
        navigate("/DeleteRoom")
      }

    return(
        <div className="container"> 
                <form>
                <div className="Id"> <label>id :</label> 
            <input type='number' value={id} onChange={e=>setID(e.target.value)}/></div>
            
            <div className="RoomNo"> <label>Room No :</label> 
            <input type='number' value={roomNo} onChange={e=>setroomNo(e.target.value)}/></div>
            
            <div className="RoomType"> <label>Room Type :</label> 
            <input type='text' value={roomType} onChange={e=>setroomType(e.target.value)}/></div>
            
            <div className="FloorNo"> <label>floor No :</label> 
            <input type='number' value={floorNo} onChange={e=>setfloorNo(e.target.value)}/></div>

            <div className="NoOFbeds"> <label>No oF beds :</label> 
            <input type='number' value={noOfbeds} onChange={e=>setnoOfbeds(e.target.value)}/></div>
                    
            <div className="RoomRate"> <label>Room Rate :</label> 
            <input type='number' value={roomRate} onChange={e=>setroomRate(e.target.value)}/></div>

            <div className="save"> <button onClick={save} >Save</button></div>
            <div className="Update"> <button onClick={Update} >Update</button></div>
            <div className="Delete"> <button onClick={Delete} >Delete</button></div>

                    </form>
                    </div>)
}
export default AddRoom