
import './Home.css'
import  hotel from './hotel.jpg';
import hotelRoom from './hotelRoom.webp';
const Home = () => {
 
    
    return (
        <div className="Home">
            <h1 className="Hotel">Welcome to Online Hotel Management System</h1>
            <h1 className="Login"> Login to Continue </h1>  
            <img className='hotelimg' alt='img for home page hotel' src={hotel} height={250} width={400} /> 
            <img className='hotelimg2' alt='img for home page' src={hotelRoom} height={250} width={400}/>
        </div>
       
    )
}
export default Home;