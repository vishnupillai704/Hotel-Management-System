import axios from 'axios';

const Employee_Details="http://localhost:8550/Employee-GetData"
const Inventory_Details="http://localhost:8550/Inventory-GetData"

class InventoryService {
   
    getEmployeeDetail(){
      return axios.get(Employee_Details);
    }
    getInventoryDetails(){
        return axios.get(Inventory_Details);
      }
}
export default new InventoryService();   