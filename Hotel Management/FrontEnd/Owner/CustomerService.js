import axios from 'axios';
const Customer_Url = "http://localhost:8550/Reservation-GetData";
class CustomerService {
    getCustomer(){
        return axios.get(Customer_Url);
    }
}
export default new CustomerService()