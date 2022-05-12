import React, { Component } from 'react';

import CustomerService from '../services/CustomerService';
import GuestService from '../services/GuestService';

// import { withRouter } from './withRouter';

class ListCustomer extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            customers:[],
            UpdateCustomers:[]
        }
      
    }
    componentDidMount(){
        CustomerService.getCustomer().then((res)=>{
       this.setState({customers: res.data});
        });

        GuestService.getUpdateddetails().then((res)=>{
            this.setState({UpdateCustomers:res.data});
        });
    }
    
    
    render() {
        return (
            <div>
                <h2 className='text-center'>Check-In Guest List</h2>
                <div className='row'>
                    
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Adults</th>
                                <th>status</th>
                                <th>NumberOfnights</th>
                                <th>Email</th>
                                <th>Phonenumber</th>
                                <th>Gender</th>
                                <th>Address</th>
                                <th>Check-in-Date</th>
                                <th>Check-out-Date</th>
                                <th>Room-Rate</th>
                                <th>Room-No</th>
                            </tr>
                        </thead>
                      <tbody>
                          {
                              this.state.customers.map(
                                  customer=>
                                  <tr key={customer.id}>
                                      <td>{customer.id}</td>
                                      <td>{customer.name}</td>
                                      <td>{customer.adults}</td>
                                      <td>{customer.status}</td>
                                      <td>{customer.numberOfnights}</td>
                                      <td>{customer.email}</td>
                                      <td>{customer.phonenumber}</td>
                                      <td>{customer.gender}</td>
                                      <td>{customer.address}</td>
                                      <td>{customer.checkindate}</td>
                                      <td>{customer.checkoutdate}</td>
                                      <td>{customer.roomrate}</td>
                                      <td>{customer.roomNo}</td>
                                  </tr>
                              )
                          }
                      </tbody>
                    </table>
                     </div>

                    <div>
                       <div><h2 className='text-center'>Check-Out GuestList</h2></div>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>status</th>
                                <th>Check-out-Date</th>
                                <th>Room No</th>
                                
                            </tr>
                        </thead>
                      <tbody>
                          {
                              this.state.UpdateCustomers.map(
                                  Updatecustomer=>
                                  <tr key={Updatecustomer.iD}>
                                      <td>{Updatecustomer.iD}</td>
                                      <td>{Updatecustomer.updatedname}</td>
                                      <td>{Updatecustomer.updatedstatus}</td>
                                      <td>{Updatecustomer.updatedcheckoutdate}</td>
                                      <td>{Updatecustomer.updatedroomNo}</td>
                                  </tr>
                              )
                          }
                      </tbody>
                    </table>
               </div>
                
            </div>
        );
    }
}


export default  ListCustomer;