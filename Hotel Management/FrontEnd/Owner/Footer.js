import './Footer.css';
import logo1 from './logo1.jpg';
function Footer(){

    return(
        <div className='footer'>
            <span className="HeadingHotel" >Hotel Management System</span>
            <span className="Copyright" >Copyright @2022 HotelManagement,Inc.</span>
            <span className="Legal">Legal Stuff</span>
            <span className="Privacy" >Privacy Policy</span>
            <span className="CustomerCareEmail" >Customer Care Email</span>
            <span className="Care" >Vishnupillai704@gmail.com</span>
            <img  className="FooterLogo"   src={logo1} alt='logo' height={70} width={70} />
        </div>
    )

}
export default Footer;