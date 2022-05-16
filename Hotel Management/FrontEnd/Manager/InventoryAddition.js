import React,{useState} from "react";                                                              

import {useNavigate} from "react-router-dom";
import InventoryService from "../services/InventoryService";

function InventoryAddition(){

    let navigate=useNavigate();
    const[id,setid]=useState('')
    const[employeeName,setemployeeName]=useState('')
    const[employeeAddress,setemployeeAddress]=useState('')
    const[employeeSalary,setemployeeSalary]=useState('')
    const[employeeAge,setemployeeAge]=useState('')
    const[occupation,setoccupation]=useState('')
    const[employeeEmail,setemployeeEmail]=useState('')
    const[iD,setiD]=useState('')
    const[day,setday]=useState('')
    const[foods,setfoods]=useState('')
    const[drinks,setdrinks]=useState('')
    const[linen,setlinen]=useState('')
    const[cleaningProducts,setcleaningProducts]=useState('')
    const[totalCost,settotalCost]=useState('')

    const save=(e)=>{
        e.preventDefault();
        let employee={id:id,employeeName:employeeName,employeeAddress:employeeAddress,employeeSalary:employeeSalary,employeeAge:employeeAge,occupation:occupation,employeeEmail:employeeEmail}
        console.log("employee =>" +JSON.stringify(employee))

        InventoryService.loadEmployeeDetails(employee).then((res)=>{navigate("/InventoryDetails")})
    }
    const Update=(e)=>{
        e.preventDefault();
        let Updateemployee={id:id,employeeName:employeeName,employeeAddress:employeeAddress,employeeSalary:employeeSalary,employeeAge:employeeAge,occupation:occupation,employeeEmail:employeeEmail}
        console.log("employee =>" +JSON.stringify(Updateemployee))
        InventoryService.UpdateEmployeeDetails(Updateemployee).then((res)=>{navigate("/InventoryDetails")})  
    }
    
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
    const Delete=(e)=>{
        e.preventDefault();
        navigate("/DeleteEmployee")
      }
      const DeleteInventory=(e)=>{
        e.preventDefault();
        navigate("/DeleteInventory")
      }
    
    

    return(
        <div className="container">
            <form>
             <div className="id" ><label>Id:</label>
             <input type="number" value={id} onChange={(e)=>setid(e.target.value)} /></div>
 
             <div className="employeeName" ><label>Employee Name :</label>
             <input type="text" value={employeeName} onChange={(e)=>setemployeeName(e.target.value)}/></div>

             <div className="employeeAddress" ><label>Employee Address:</label>
             <input type="text" value={employeeAddress} onChange={e=>setemployeeAddress(e.target.value)} /></div>

             <div className="employeeSalary"><label>Employee Salary :</label>
             <input type="number" value={employeeSalary} onChange={e=>setemployeeSalary(e.target.value)}/></div>

             <div className="employeeAge" ><label>Employee Age :</label>
             <input type="number" value={employeeAge} onChange={e=>setemployeeAge(e.target.value)} /></div>

             <div className="occupation"><label>Occupation :</label>
             <input type="text" value={occupation} onChange={e=>setoccupation(e.target.value)} /></div>

             <div className="employeeEmail" ><label>Employee Email :</label>
             <input type="email" value={employeeEmail} onChange={e=>setemployeeEmail(e.target.value)}/></div>
             
             <div className="save"> <button onClick={save} >Save</button></div>
             <div className="Update"> <button onClick={Update} >Update</button></div>
             <div className="Delete"> <button onClick={Delete} >Delete</button></div>
            </form>

            <form>
            <div className="iD" ><label>Id:</label>
             <input type="number" value={iD} onChange={(e)=>setiD(e.target.value)} /></div>
            
             <div className="day"><label> Day :</label>
             <input type="number" value={day} onChange={e=>setday(e.target.value)}/></div>
             
             <div className="foods" ><label>Foods:</label>
             <input type="text" value={foods} onChange={e=>setfoods(e.target.value)} /></div>
              
             <div className="drinks" ><label>Drinks:</label>
             <input type="text" value={drinks} onChange={e=>setdrinks(e.target.value)} /></div>

             <div className="linen" ><label>Linen:</label>
             <input type="text" value={linen} onChange={e=>setlinen(e.target.value)} /></div>

             <div className="cleaningProducts" ><label>Cleaning Products:</label>
             <input type="text" value={cleaningProducts} onChange={e=>setcleaningProducts(e.target.value)} /></div>
             
             <div className="totalcost"><label>Total Cost :</label>
             <input type="number" value={totalCost} onChange={e=>settotalCost(e.target.value)}/></div>

             
             <div className="save"> <button onClick={saveInventory} >Save</button></div>
             <div className="Update"> <button onClick={UpdateInventory} >Update</button></div>
             <div className="Delete"> <button onClick={DeleteInventory} >Delete</button></div>
            </form>

        </div>
    )

}
export default InventoryAddition;