import axios from 'axios';
const Department_getURl="http://localhost:8550/Department-GetData";
const Department_postUrl="http://localhost:8550/Department-PostData";
const Department_UpdateUrl="http://localhost:8550/Department-UpdateData";
const DeleteDepartment_Details="http://localhost:9097/DepartmentDetails/delete";
class DepartmentService{
    getDepartmentDetails(){
        return axios.get(Department_getURl)
    }
    postDepartmentDetails(Department){
        return axios.post(Department_postUrl,Department)
    }
    updateDepartmentDetails(Department){
        return axios.put(Department_UpdateUrl,Department)
    }
    DeleteDepartmentDetails(id){
        return axios.delete(DeleteDepartment_Details + "/" + id)
    }

}
export default new DepartmentService()