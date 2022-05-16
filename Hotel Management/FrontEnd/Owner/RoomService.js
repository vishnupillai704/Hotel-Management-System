import axios from 'axios';
const Room_url="http://localhost:8550/RoomManagement-GetData";
class RoomService{
    getRoomdetails(){
       return axios.get(Room_url);
    }
}
export default new RoomService();