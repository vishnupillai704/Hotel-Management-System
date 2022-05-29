import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import InventoryService from "../services/InventoryService";
import './EmployeeAddition.css'
function EmployeeAddition(){
    let navigate=useNavigate();
    const[id,setid]=useState('')
    const[employeeName,setemployeeName]=useState('')
    const[employeeAddress,setemployeeAddress]=useState('')
    const[employeeSalary,setemployeeSalary]=useState('')
    const[employeeAge,setemployeeAge]=useState('')
    const[occupation,setoccupation]=useState('')
    const[employeeEmail,setemployeeEmail]=useState('')

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
    const Delete=(e)=>{
        e.preventDefault();
        navigate("/DeleteEmployee")
      }

      return(
        <div className="containerMain">
        <form onSubmit={save} >
         <div className="id" ><label>Id:</label>
         <input type="number" placeholder="Only for Update" value={id} onChange={(e)=>setid(e.target.value)} /></div>

         <div className="employeeName" ><label>Employee Name :</label>
         <input type="text" value={employeeName} onChange={(e)=>setemployeeName(e.target.value)} required /></div>

         <div className="employeeAddress" ><label>Employee Address:</label>
         <input type="text" value={employeeAddress} onChange={e=>setemployeeAddress(e.target.value)} required /></div>

         <div className="employeeSalary"><label>Employee Salary :</label>
         <input type="number" value={employeeSalary} onChange={e=>setemployeeSalary(e.target.value)} required /></div>

         <div className="employeeAge" ><label>Employee Age :</label>
         <input type="number" value={employeeAge} onChange={e=>setemployeeAge(e.target.value)} required /></div>

         <div className="occupation"><label>Occupation :</label>
         <input type="text" value={occupation} onChange={e=>setoccupation(e.target.value)} required  /></div>

         <div className="employeeEmail" ><label>Employee Email :</label>
         <input type="email" value={employeeEmail} onChange={e=>setemployeeEmail(e.target.value)} required /></div>
           
           <input className="SubmitEmployee" type="submit" value="save" />
        </form>
        <main className="EmployeeActions">
              <div className="UpdateEmployee"> <button onClick={Update} >Update</button></div>
              <div className="DeleteEmployee"> <button onClick={Delete} >Delete</button></div>
             </main>
        </div>
      )
}
export default EmployeeAddition;