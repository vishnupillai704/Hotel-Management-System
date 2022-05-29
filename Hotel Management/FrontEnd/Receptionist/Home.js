
import './Home.css'
import  hotel from './hotel.jpg';
import hotelRoom from './hotelRoom.webp';

import hotellobby from './hotellobby.jpg';
const Home = () => {
 
    
    return (
        <div className="Home">
            <h1 className="Hotel">Welcome to Online Hotel Management System</h1>
            <h1 className="Login"> Login to Continue </h1>
            <h1><span className="luxury"> Luxury must be comfortable otherwise it is not luxury </span></h1>
            <img data-testid="img1" className="hotelfront1" alt="img for hotel" src={hotellobby} height={400} width={909} />
            <img className='hotelimg' alt='img for home page hotel' src={hotel} height={250} width={400} /> 
            <img className='hotelimg2' alt='img for home page' src={hotelRoom} height={250} width={400}/>
           
        </div>
    
       
    )
}
export default Home;