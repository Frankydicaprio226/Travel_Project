import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/Waterfall - 63283.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
 import  {FiFacebook} from 'react-icons/fi'
 import {AiOutlineInstagram} from 'react-icons/ai'
 import {SiTripadvisor} from 'react-icons/si'
 import {BsListTask} from 'react-icons/bs'
 import {TbApps} from 'react-icons/tb'

 import Aos from 'aos'
 import 'aos/dist/aos.css'


const Home = () => {
  //Lets create a react hook to add a scroll animation...
  useEffect(()=>{
      Aos.init({duration: 2000})
  }, [])


  
    return (
       <section className='home'>
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="Palm Trees - 41897.mp4"></video>

        <div className="homeContent container">
            <div className="textDiv">

            <span data-aos="fade-up"
            className="smallText">
                Our Packages
            </span>

            <h1 data-aos="fade-up"
            className="homeTitle">
                Search your holiday
            </h1>
        
            </div>

            <div data-aos="fade-up" className="cardDiv grid">
                <div className="destinationInput">
                <label htmlFor="city">Search your destination:</label>
                <div className="input flex">
                <input type="text" placeholder="Enter name here..."></input>
                <GrLocation className="icon"></GrLocation>
                </div>
                </div>


                <div className="dateInput">
                <label htmlFor="date">Select your date:</label>
                <div className="input flex">
                <input type="date"></input>
                </div>
                </div>

                <div className="priceInput">
               <div className="label_total flex">
                    <label htmlFor="price">Max price:</label>
                    <h3 className="total">$5000</h3>
               </div>
               <div className="input flex">
               <input type="range" max="5000" min="1000"></input>
               </div>
                </div>
                
                <div className="searchOptions flex">
                <HiFilter className="icon"></HiFilter>
                <span>MORE FILTERS</span>
                </div>
                </div>
                <div data-aos="fade-up" 
                className="homeFooterIcons flex">
                    <div className="rightIcons">
                    <FiFacebook className="icon"></FiFacebook>
                    <AiOutlineInstagram className="icon"></AiOutlineInstagram>
                    <SiTripadvisor className="icon"></SiTripadvisor>
                    </div>

                    <div className="leftIcons">
                    <BsListTask className="icon"></BsListTask>
                    <TbApps className="icon"></TbApps>
                    </div>  
                </div>
                </div>

        
       </section>
    )
}

export default Home