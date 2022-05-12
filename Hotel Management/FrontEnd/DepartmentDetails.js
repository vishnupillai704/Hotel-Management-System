import React from 'react';
import DepartmentService from '../services/DepartmentService';

class DepartmentDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Departments:[]
        }
    }
    componentDidMount(){
        DepartmentService.getDepartmentDetails().then((res)=>{
            this.setState({Departments:res.data});
        });
    }
    render(){
        return(
            <div>
              <h2 className='text-center'>Department List</h2>
              <div className='row'>
              <table className='table table-striped table-bordered'>
              <thead>
                     <tr>
                               <th>ID</th>
                               <th>Department Name</th>
                               <th>Total Employees</th>
                               <th>Total Salary</th>
                     </tr>
                        </thead>

                        <tbody>
                            {this.state.Departments.map(
                                Department=>
                                <tr key={Department.id}>
                                    <td>{Department.id}</td>
                                    <td>{Department.departmentName}</td>
                                    <td>{Department.totalEmployees}</td>
                                    <td>{Department.totalSalary}</td>
                                </tr>
                            )}

                        </tbody>


                  </table>
              </div>

            </div>
        )
    }

}
export default DepartmentDetails;