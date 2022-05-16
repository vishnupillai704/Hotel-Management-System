import React,{useState} from "react"; 
import {useNavigate} from "react-router-dom";
import DepartmentService from "../Services/DepartmentService";

function DeleteDepartment(){

    let navigate=useNavigate();
    const[id,setid]=useState('')
    const save=(e)=>{
        e.preventDefault();
        let Department= id
        console.log("Customer => " +JSON.stringify(Department));
         
        DepartmentService.DeleteDepartmentDetails(Department).then(res =>{navigate("/DepartmentDetails")})
    }
  
    return(
        <div className="container"> 
            <h1>Please Enter Department Id You want to delete:</h1>
                <form> 
                    <div className="Id"> <label>id :</label> 
                  <input type='number' value={id} onChange={e=>setid(e.target.value)}/></div>
                  <div className="save"> <button onClick={save} >Save</button></div>
                  </form>
                  </div>
    );

}

export default DeleteDepartment;