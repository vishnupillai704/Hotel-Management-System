import './Home.css'
import hotelMain from './hotelMain.jpg';
const Home = () => {
   
    
    return (
  <div className="homeMain">
        <h1 className='welcome' >Welcome to Online Hotel Management System </h1>
        <h2 className='continue' >Please Login to Continue</h2>
        <img className="hotelfrontMain" alt='hotel Front ' src={hotelMain} width={700} height={400} />
        <h1><span className="luxury"> Luxury must be comfortable otherwise it is not luxury </span></h1>
  </div>
    )
}
export default Home;