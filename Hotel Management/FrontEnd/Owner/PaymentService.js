import axios from "axios";

const Payment_Details="http://localhost:8550/Payment-Details";

class PaymentService{

    GetPaymentDetails(){
      return axios.get(Payment_Details);
    }

}
export default new PaymentService();