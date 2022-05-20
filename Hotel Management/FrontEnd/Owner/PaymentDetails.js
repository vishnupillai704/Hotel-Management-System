import React from 'react';
import  PaymentService from '../Services/PaymentService';

class PaymentDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Payments:[]
        }
    }
    componentDidMount(){
        PaymentService.GetPaymentDetails().then((res)=>{
            this.setState({Payments:res.data});
        });
    }
    render(){
        return(
            <div>
              <h2 className='text-center'>Payment List</h2>
              <div className='row'>
              <table className='table table-striped table-bordered'>
              <thead>
                     <tr>      
                                <th>Id</th>
                               <th>CustomerId:</th>
                               <th>CustomerName</th>
                               <th>Amount</th>
                               <th>Status</th>
                     </tr>
                        </thead>

                        <tbody>
                            {this.state.Payments.map(
                                payment=>
                                <tr key={payment.id}>
                                    <td>{payment.id}</td>
                                    <td>{payment.customerId}</td>
                                    <td>{payment.customerName}</td>
                                    <td>{payment.amount}</td>
                                    <td>{payment.status}</td>
                                </tr>
                            )}

                        </tbody>


                  </table>
              </div>

            </div>
        )
    }

}

export default PaymentDetails;