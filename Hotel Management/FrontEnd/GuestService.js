import axios from 'axios';

const Guest_url="http://localhost:8550/GuestManagement-GetData";
const GuestUpdate_url="http://localhost:8550/GuestManagement-UpdateData";
const Guestdelete_url="http://localhost:8082/Update/delete";
class GuestService{
    getUpdateddetails(){
        return axios.get(Guest_url)
    }
    Updatedetails(Customer){
        return axios.put(GuestUpdate_url,Customer)
    }
    Deletedetails(id){
        return axios.delete(Guestdelete_url + '/' + id);
    }
}
export default new GuestService()