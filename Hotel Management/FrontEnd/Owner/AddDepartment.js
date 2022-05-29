import React,{useState} from "react";                                                              
import './AddDepartment.css'
import {useNavigate} from "react-router-dom";
import DepartmentService from "../Services/DepartmentService";

function AddDepartment(){
    let navigate=useNavigate();
    const[id,setid]=useState('')
    const[departmentName,setdepartmentName]=useState('')
    const[totalEmployees,settotalEmployees]=useState('')
    const[totalSalary,settotalSalary]=useState('')

    
    const save=(e)=>{
        e.preventDefault();
        let Department={id:id,departmentName:departmentName,totalEmployees:totalEmployees,totalSalary:totalSalary}
        console.log("employee =>" +JSON.stringify(Department))

        DepartmentService.postDepartmentDetails(Department).then((res)=>{navigate("/DepartmentDetails")})
    }
    const Update=(e)=>{
        e.preventDefault();
        let UpdateDepartment={id:id,departmentName:departmentName,totalEmployees:totalEmployees,totalSalary:totalSalary}
        console.log("employee =>" +JSON.stringify(UpdateDepartment))
        DepartmentService.updateDepartmentDetails(UpdateDepartment).then((res)=>{navigate("/DepartmentDetails")})  
    }

    const Delete=(e)=>{
        e.preventDefault();
        navigate("/DeleteDepartment")
      }

    return(
        <div className="containerInventory">
            <form onSubmit={save} >
            <div className="id" ><label>Id:</label>
             <input type="number" value={id} placeholder='Only for Update' onChange={(e)=>setid(e.target.value)} /></div>
             
             <div className="departmentName" ><label>Department Name:</label>
             <input type="text" value={departmentName} onChange={(e)=>setdepartmentName(e.target.value)}  required /></div>

             <div className="totalEmployees" ><label>Total Employees :</label>
             <input type="number" value={totalEmployees} onChange={(e)=>settotalEmployees(e.target.value)} required /></div>

             <div className="totalSalary" ><label>Total Salary:</label>
             <input type="number" value={totalSalary} onChange={(e)=>settotalSalary(e.target.value)} required /></div>
              
              <input type="submit" value="save" className="saveDepartment" />
            </form>
            <main className="DepartmentActions">
             <div className="UpdateDepartment"> <button onClick={Update} >Update</button></div>
             <div className="DeleteDepartment"> <button onClick={Delete} >Delete</button></div>
            </main>

        </div>
    )

}
export default AddDepartment;