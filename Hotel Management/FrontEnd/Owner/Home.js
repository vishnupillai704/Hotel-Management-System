import './Home.css'
import hotelMain from './hotelMain.jpg'
const Home = () => {
   
    
    return (
  <div>
        <h1 className='welcome' >Welcome to Online Hotel Management System </h1>
        <h2 className='continue' >Please Login to Continue</h2>
        <img className='hotelMain' alt='hotel front img' src={hotelMain} width={600} height={300} />
        <h1><span className="luxury"> Luxury must be comfortable otherwise it is not luxury </span></h1>
  </div>
    )
}
export default Home;