import React,{useState} from "react";                                                              
import './RoomAddition.css'
import {useNavigate} from "react-router-dom";
import RoomService from "../services/RoomService";
function RoomAddition(){
    let navigate=useNavigate();
    const[id,setID]=useState('')
    const[roomNo,setroomNo]=useState('')
    const[roomType,setroomType]=useState('')
    const[floorNo,setfloorNo]=useState('')
    const[noOfbeds,setnoOfbeds]=useState('')
    const[roomRate,setroomRate]=useState('')

    const save=(e)=>{
        e.preventDefault();
        let Room= {roomNo:roomNo,roomType:roomType,floorNo:floorNo,noOfbeds:noOfbeds,roomRate:roomRate};
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
        <div className="container1"> 
                <form onSubmit={save}>
                <div className="Id"> <label>Id :</label> 
            <input type='number' value={id} placeholder="Only For Update" onChange={e=>setID(e.target.value)}  /></div>
            
            <div className="RoomNo"> <label>Room No :</label> 
            <input type='number' value={roomNo} onChange={e=>setroomNo(e.target.value)} required /></div>
            
            <div className="RoomType"> <label>Room Type :</label> 
            <input type='text' value={roomType} onChange={e=>setroomType(e.target.value)} required /></div>
            
            <div className="FloorNo"> <label>floor No :</label> 
            <input type='number' value={floorNo} onChange={e=>setfloorNo(e.target.value)} required /></div>

            <div className="NoOFbeds"> <label>No oF beds :</label> 
            <input type='number' value={noOfbeds} pattern="^\d{5}$" onChange={e=>setnoOfbeds(e.target.value)} required /></div>
                    
            <div className="RoomRate"> <label>Room Rate :</label> 
            <input type='number' value={roomRate} onChange={e=>setroomRate(e.target.value)} required /></div>
             
             <input className="SubmitForm" type="submit" value="save" />
                    </form>
                   <main className="Action">
            <div className="UpdateRoom"> <button onClick={Update} >Update</button></div>
            <div className="DeleteRoom"> <button onClick={Delete} >Delete</button></div>
            </main>
                    </div>)
}
export default RoomAddition;