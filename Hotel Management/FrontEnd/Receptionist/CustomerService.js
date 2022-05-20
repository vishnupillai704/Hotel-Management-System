import axios from 'axios';

const Customer_Url = "http://localhost:8550/Reservation-GetData";
const Customer_postUrl="http://localhost:8550/Reservation-PostData";
const Customerdelete_Url="http://localhost:8080/Booking/delete";
const Payment_Url="http://localhost:8080/Booking/payment";
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
    paymentDetails(CustomerId,CustomerName,Amount,Status){
        return axios.get(Payment_Url +"?customerId="+CustomerId+"&customerName="+CustomerName+"&amount="+Amount+"&status="+Status)

    }
}
export default new CustomerService()

