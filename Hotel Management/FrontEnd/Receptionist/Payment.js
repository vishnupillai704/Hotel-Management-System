import {useNavigate} from "react-router-dom";
import React,{useEffect, useState} from "react";   
import CustomerService from "../services/CustomerService";
import './Payment.css'
import GooglePayButton from '@google-pay/button-react';
function Payment(){
    let navigate=useNavigate();
  const[CustomerId,setCustomerId]=useState('');
  const[CustomerName,setCustomerName]=useState('');
  const[Amount,setAmount]=useState('');
  const[Status,setStatus]=useState('');
  const[Customers,setCustomers]=useState([]);
   
useEffect(()=>{
  getCustomer()
},[])

  const getCustomer=()=>{
    CustomerService.getCustomer().then((response)=>{
        setCustomers(response.data);
        console.log(response.data);
    });
  };
  
  const save=(e)=>{
    e.preventDefault();
    let Customer=CustomerId
    let CustomerNam=CustomerName
    let Amoun=Amount
    let Statu=Status
    console.log("Customer => " +JSON.stringify(CustomerId));
     
    CustomerService.paymentDetails(Customer,CustomerNam,Amoun,Statu).then(res =>{navigate("/CustomerDetails")})
}

   return(
         <div>
         <div className="MainContainer" >
         <h2 className='Heading'>Check-In Guest </h2>
         <table className="table-bordered">
                        <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Amount</th>
                              </tr>
                              </thead>
                              <tbody>
                                {Customers.map(customer=>
                                  <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.roomrate}</td>
                                  </tr>
                                  )}
                              </tbody>
                              </table>

         </div>
           <div className="Main">
                 <div className="titles"><h1>Payment Information</h1></div>
       <form>
       <div className="CustomerId"> <label>CustomerId :</label> 
            <input type='number' value={CustomerId} onChange={e=>setCustomerId(e.target.value)} required/>
        </div>
        <div className="CustomerName"> <label>CustomerName :</label> 
            <input type='text' value={CustomerName} onChange={e=>setCustomerName(e.target.value)} required/>
        </div>
        <div className="RoomRates"> <label> Amount:</label> 
            <input type='text' value={Amount} onChange={e=>setAmount(e.target.value)} required/>
        </div>
        <div className="Status1"> <label> Status : </label> 
          <input type='text' value={Status} onChange={e=>setStatus(e.target.value)} required/>
        </div>
   </form> 
      
      <main>
           <GooglePayButton
           className="PlayButton"
           environment="TEST"
           paymentRequest={{
               apiVersion:2,
               apiVersionMinor:0,
               allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  }, tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Hotel Owner",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: Amount,
                currencyCode: "INR",
                countryCode: "US",
              },
              shippingAddressRequired: true,
              callbackIntents: ["PAYMENT_AUTHORIZATION"],
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log(paymentRequest);
            }}
            onPaymentAuthorized={paymentData =>{
              console.log('paymentData ' + paymentData);
              return { transactionState: 'SUCCESS'}
            }}
            existingPaymentMethodRequired='false'
            buttonColor="black"
            buttonType="pay"
           >
           </GooglePayButton>

          <button  className="SavePayment" onClick={save} >Save</button>
      </main>

       </div>
       </div>
   )

}
export default Payment;