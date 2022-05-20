import axios from 'axios';

const Employee_Details="http://localhost:8550/Employee-GetData"
const Employee_loadDetails="http://localhost:8550/Employee-PostData"
const Employee_UpdateDetails="http://localhost:8550/Employee-UpdateData"
const Employee_DeleteDetails="http://localhost:8084/EmployeeManagement/delete"
const Inventory_Details="http://localhost:8550/Inventory-GetData"
const Inventory_loadDetails="http://localhost:8550/Inventory-PostData"
const Inventory_UpdateDetails="http://localhost:8550/Inventory-UpdateData"
const Inventory_DeleteDetails="http://localhost:8084/InventoryManagement/delete"
class InventoryService {
   
    getEmployeeDetail(){
      return axios.get(Employee_Details);
    }
    loadEmployeeDetails(Employee){
       return  axios.post(Employee_loadDetails,Employee);
    }
    UpdateEmployeeDetails(Employee){
        return axios.put(Employee_UpdateDetails,Employee);
    }
    DeleteEmployeeDetails(id){
       return axios.delete(Employee_DeleteDetails +"/"+ id);
    }
    getInventoryDetails(){
        return axios.get(Inventory_Details);
    }
    loadInventoryDetails(Inventory){
        return axios.post(Inventory_loadDetails,Inventory);
    }
    UpdateInventoryDetails(Inventory){
        return axios.put(Inventory_UpdateDetails,Inventory);
    }
    DeleteInventoryDetails(id){
       return axios.delete(Inventory_DeleteDetails +"/"+ id);
    }

}
export default new InventoryService();