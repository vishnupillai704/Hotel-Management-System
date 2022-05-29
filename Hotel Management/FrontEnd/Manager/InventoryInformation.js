import React from 'react';
import InventoryService from '../services/InventoryService';
class InventoryInformation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            employees:[],
            inventories:[]
            
        }
    }
    componentDidMount(){
        InventoryService.getEmployeeDetail().then((res)=>{
            this.setState({employees: res.data});
             });
        InventoryService.getInventoryDetails().then((res)=>{
            this.setState({inventories:res.data});
        })
    }
    render(){
        return(
            <div>
                 <h2 className='text-center'>Employee List</h2>
                <div className='row'>
                    
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                               <th>ID</th>
                               <th>Employee Name</th>
                               <th>Employee Address</th>
                               <th>Employee Salary</th>
                               <th>Employee Age</th>
                               <th>Occupation</th>
                               <th>Employee Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map(
                                employee=>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.employeeName}</td>
                                    <td>{employee.employeeAddress}</td>
                                    <td>{employee.employeeSalary}</td>
                                    <td>{employee.employeeAge}</td>
                                    <td>{employee.occupation}</td>
                                    <td>{employee.employeeEmail}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                    <h2 className='text-center' >Inventory List</h2>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Day</th>
                            <th>Foods</th>
                            <th>Drinks</th>
                            <th>Linen</th>
                            <th>Cleaning Products</th>
                            <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.inventories.map(inventory=>
                                <tr key={inventory.iD}>
                                    <td>{inventory.iD}</td>
                                    <td>{inventory.day}</td>
                                    <td>{inventory.foods}</td>
                                    <td>{inventory.drinks}</td>
                                    <td>{inventory.linen}</td>
                                    <td>{inventory.cleaningProducts}</td>
                                    <td>{inventory.totalCost}</td>
                                </tr>
                                )}
                        </tbody>

                    </table>
            </div>
            </div>
        )
    }

}



export default InventoryInformation;