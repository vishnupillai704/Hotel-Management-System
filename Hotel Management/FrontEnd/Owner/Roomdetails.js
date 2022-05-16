import React from 'react';
import RoomService from '../Services/RoomService';

class Roomdetails extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            rooms:[]
        }
      
    }
    componentDidMount(){
        RoomService.getRoomdetails().then((res)=>{
       this.setState({rooms: res.data});
        });
    }
     

    render() {
        return (
            <div>
                <h2 className='text-center'>Guest List</h2>
                <div className='row'>
                    
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Room ID</th>
                                <th>Room No</th>
                                <th>Room Type</th>
                                <th>Floor No</th>
                                <th>No Of Beds</th>
                                <th>Room Rate</th>
                                
                                </tr>
                                </thead>
                                <tbody>
                                    {this.state.rooms.map(
                                        room =>
                                        <tr key={room.id}>
                                            <td>{room.id}</td>
                                            <td>{room.roomNo}</td>
                                            <td>{room.roomType}</td>
                                            <td>{room.floorNo}</td>
                                            <td>{room.noOfbeds}</td>
                                            <td>{room.roomRate}</td> 
                                        </tr>
                                    )}
                                </tbody>
                                </table>
                                </div>
                                </div>
                                );
}
}
export default Roomdetails;