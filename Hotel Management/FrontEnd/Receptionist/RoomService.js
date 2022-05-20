import axios from 'axios';
const Room_url="http://localhost:8550/RoomManagement-GetData";
const Room_Post_Url="http://localhost:8550/RoomManagement-PostData";
const Room_Put_Url="http://localhost:8550/RoomManagement-UpdateData";
const Room_Delete_Url="http://localhost:8083/RoomManagement/delete";
class RoomService{
    getRoomdetails(){
       return axios.get(Room_url);
    }
    postRoomdetails(room){
        return axios.post(Room_Post_Url,room);
    }
    UpdateRoomdetails(room){
        return axios.put(Room_Put_Url,room)
    }
    DeleteRoomdetails(id){
         return axios.delete(Room_Delete_Url + "/" + id)
    }
}
export default new RoomService();