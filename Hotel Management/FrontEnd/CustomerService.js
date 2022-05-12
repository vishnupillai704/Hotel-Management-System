import axios from 'axios';

const Customer_Url = "http://localhost:8550/Reservation-GetData";
const Customer_postUrl="http://localhost:8550/Reservation-PostData";
const Customerdelete_Url="http://localhost:8080/Booking/delete";
class CustomerService {
    getCustomer(){
        return axios.get(Customer_Url);
    }
    createCustomer(Customer){
        return axios.post(Customer_postUrl,Customer)
    }
    Deletedetails(id){
        return axios.delete(Customerdelete_Url + '/' + id);
    }
}
export default new CustomerService()

