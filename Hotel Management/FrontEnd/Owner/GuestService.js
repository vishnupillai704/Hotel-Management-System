import axios from 'axios';

const Guest_url="http://localhost:8550/GuestManagement-GetData";

class GuestService{
    getUpdateddetails(){
        return axios.get(Guest_url)
    }

}
export default new GuestService()