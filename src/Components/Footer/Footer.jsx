import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/Sea - 24216.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor } from 'react-icons/fa'
import{FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

      //Lets create a react hook to add a scroll animation...
  useEffect(()=>{
    Aos.init({duration: 2000})
   }, [])
 
    return (


       <section className="footer">
        <div className="videoDiv">
            <video src={video2} loop autoPlay muted type="Sea - 24216/mp4"></video>
        </div>

        <div className="secContent container">
            <div className="contactDiv flex">
                <div  data-aos="fade-up"
                 className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>

                <div className="inputDiv flex">
                    <input  data-aos="fade-up" type="text" placeholder="Enter Email Address"/>
                    <button  data-aos="fade-up" className='btn flex' type='submit'>
                       SEND <FiSend classname="icon"></FiSend>
                    </button>
                </div>
            </div>
            <div className="footerCard flex">
            <div className="footerIntro flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                    <MdOutlineTravelExplore className="icon"/> Travel.   
                    </a>
                </div>

                <div  data-aos="fade-up"
                 className="footerParagraph">
                Dans le Toolkit for VS Code, vous devez disposer d'un profil d'informations d'identification
                contenant leAWS Identity and Access Management(IAM) nécessaires pour déployer et exécuter des applications sans serveur. 
               
                </div>

                <div  data-aos="fade-up"
                 className="footerSocials flex">
                <AiOutlineTwitter className="icon"></AiOutlineTwitter>
                <AiFillYoutube className="icon"></AiFillYoutube>
                <AiFillInstagram className="icon"></AiFillInstagram>
                <FaTripadvisor className="icon"></FaTripadvisor>
                </div>
                </div>


            <div className="footerLinks grid">
                   {/*Group One*/}
                <div  data-aos="fade-up"
                 data-aos-duration="3000"
                 className="linkGroup">
                    <span className="groupTitle">
                        OUR AGENCY
                    </span>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight> Services
                    </li>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>Insurance
                    </li>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>Agency
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>Tourism
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>Payment
                    </li>

                </div>

                   {/*Group Two */}
                   <div  data-aos="fade-up"
                    data-aos-duration="4000"
                    className="linkGroup">
                    <span className="groupTitle">
                        PARTNERS
                    </span>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight> Bookings
                    </li>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>Rentcars
                    </li>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>Hostelworld
                    </li>
                    
                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>Trivago
                    </li>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>TripAdvisor
                    </li>

                </div>

                {/*Group Three */}
                <div  data-aos="fade-up"
                data-aos-duration="5000"
                 className="linkGroup">
                    <span className="groupTitle">
                     LAST MINUTE
                    </span>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight> London
                    </li>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>California
                    </li>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>Indonesia
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>Europe
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"></FiChevronRight>Oceania
                    </li>

                </div>

            </div>  

            <div className="footerDiv flex">
                <small>BEST TRAVEL WEBSITE THEME</small>
                <small>COPYRIGHTS RESERVED ISRATECH 2022</small>

            </div>
            </div>
        </div>

       </section>
    )
}

export default Footer