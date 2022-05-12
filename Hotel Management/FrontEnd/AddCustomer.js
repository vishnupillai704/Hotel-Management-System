import React from "react";                                                                   //vishnu
import {useNavigate} from "react-router-dom";
function AddCustomer(){
  let navigate=useNavigate();

    return(
        <div>
            <button onClick={()=>{navigate("/Form")}}> Add Customer </button>
        </div>
    )



}
export default AddCustomer;
