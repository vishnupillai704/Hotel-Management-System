import delux from './delux.jpg';
import delux1 from './delux1.webp';
import delux2 from './delux2.jpg';
import delux3 from './delux3.jpeg';
import delux4 from './delux4.jpg';
import delux6 from './deluxe6.jpg';
import suite1 from './suite1.jpg';
import Suite2 from './Suite2.jpg';
import Suite3 from './Suite3.jpg';
import Suite4 from './Suite4.jpg';
import suite5 from './suite5.avif';
import suiite6 from './suiite6.jpg';
import './RoomPhotos.css';
function RoomPhotos(){
   
    return(
        <div>
            <img className='delux1' src={delux} alt='delux room 1' width={300} height={200} />
            <img className='delux2' src={delux1} alt='delux room 2' width={300} height={200}/>
            <img className='delux3' src={delux2} alt='delux room 3' width={300} height={200} />
            <img className='delux4' src={delux3} alt='delux room 4' width={300} height={200} />
            <img className='delux5' src={delux4} alt='delux room 5' width={300} height={200} />
            <img className='delux6' src={delux6} alt='delux room 6' width={300} height={200} />
            <img className='suite1' src={suite1} alt='Suite room 1' width={300} height={200}/>
            <img className='suite2' src={Suite2} alt='Suite room 2' width={300} height={200}/>
            <img className='suite3' src={Suite3} alt='Suite room 3' width={300} height={200}/>
            <img className='suite4' src={Suite4} alt='Suite room 4' width={300} height={200}/>
            <img className='suite5' src={suite5} alt='Suite room 5' width={300} height={200}/>
            <img className='suite6' src={suiite6} alt='Suite room 6 ' width={300} height={200}/>
             
             <div>
                 <span className='deluxh1' >Delux Room 1</span>
                 <span className='deluxh2' >Delux Room 2</span>
                 <span className='deluxh3' >Delux Room 3</span>
                 <span className='deluxh4' >Delux Room 4</span>
                 <span className='deluxh5' >Delux Room 5</span>
                 <span className='deluxh6' >Delux Room 6</span>
                 <span className='suiteh1'> Suite Room 1</span>
                 <span className='suiteh2'>Suite Room 2 </span>
                 <span className='suiteh3'>Suite Room 3</span>
                 <span className='suiteh4'>Suite Room 4</span>
                 <span className='suiteh5'>Suite Room 5</span>
                 <span className='suiteh6'>Suite Room 6</span>
             </div>

        </div>
        
    )


}
export default RoomPhotos;