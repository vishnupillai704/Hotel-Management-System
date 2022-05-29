import React,{useState} from "react";                                                              
import './InventoryAddition.css'
import {useNavigate} from "react-router-dom";
import InventoryService from "../services/InventoryService";

function InventoryAddition(){

    let navigate=useNavigate();
    const[iD,setiD]=useState('')
    const[day,setday]=useState('')
    const[foods,setfoods]=useState('')
    const[drinks,setdrinks]=useState('')
    const[linen,setlinen]=useState('')
    const[cleaningProducts,setcleaningProducts]=useState('')
    const[totalCost,settotalCost]=useState('')

   
    
    const saveInventory=(e)=>{
        e.preventDefault();
        let Inventory={iD:iD,day:day,foods:foods,drinks:drinks,linen:linen,cleaningProducts:cleaningProducts,totalCost:totalCost}
        console.log("employee =>" +JSON.stringify(Inventory))

        InventoryService.loadInventoryDetails(Inventory).then((res)=>{navigate("/InventoryDetails")})
    }

    const UpdateInventory=(e)=>{
        e.preventDefault();
        let UpdateInventory={iD:iD,day:day,foods:foods,drinks:drinks,linen:linen,cleaningProducts:cleaningProducts,totalCost:totalCost}
        console.log("employee =>" +JSON.stringify(UpdateInventory))

        InventoryService.UpdateInventoryDetails(UpdateInventory).then((res)=>{navigate("/InventporyDetails")})
    }
  
      const DeleteInventory=(e)=>{
        e.preventDefault();
        navigate("/DeleteInventory")
      }
    
    

    return(
        <div className="containerInventory">
            <form onSubmit={saveInventory} >
            <div className="iD" ><label>Id:</label>
             <input type="number" value={iD} onChange={(e)=>setiD(e.target.value)} required /></div>
            
             <div className="day"><label> Day :</label>
             <input type="number" value={day} onChange={e=>setday(e.target.value)}  required /></div>
             
             <div className="foods" ><label>Foods:</label>
             <input type="text" value={foods} onChange={e=>setfoods(e.target.value)} required  /></div>
              
             <div className="drinks" ><label>Drinks:</label>
             <input type="text" value={drinks} onChange={e=>setdrinks(e.target.value)} required /></div>

             <div className="linen" ><label>Linen:</label>
             <input type="text" value={linen} onChange={e=>setlinen(e.target.value)} required /></div>

             <div className="cleaningProducts" ><label>Cleaning Products:</label>
             <input type="text" value={cleaningProducts} onChange={e=>setcleaningProducts(e.target.value)} required /></div>
             
             <div className="totalcost"><label>Total Cost :</label>
             <input type="number" value={totalCost} onChange={e=>settotalCost(e.target.value)} required /></div>
              
              <input type="submit" value="save" className="saveInventory"  />
            </form>

            <main className="InventoryActions">
             <div className="UpdateInventory"> <button onClick={UpdateInventory} >Update</button></div>
             <div className="DeleteInventory"> <button onClick={DeleteInventory} >Delete</button></div>

            </main>

        </div>
    )

}
export default InventoryAddition;