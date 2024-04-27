import React from "react";
import "../style/Service.css";
import logo from '../assets/img/logo.jpeg';
import Image1 from './img/image 18.png';
import Image2 from './img/image 21.png';
import Image3 from './img/image 23.png';
import Image4 from './img/image 25.png';
import Image5 from './img/image 27.png';
import Image6 from './img/image 29.png';
import Image from './img/Group 17.png';
import Ibg from '../assets/image/service/Group 17.png'//background of service 

const YourComponent1 = () => {
  const containerStyle = {
    width: '403px',
    height: '144px',
    top: '117px',
    left: '115px',
    gap: '0px',
    opacity: '0px',
    position: 'absolute', // Assuming this is an absolute positioning
  };  

  const textStyle = {
    fontFamily: 'poppins',
    fontSize: '96px',
    fontWeight: 500,
    lineHeight: '144px',
    textAlign: 'left',
    WebkitBackgroundClip: 'text',
    color: '#CCCCCC', // Text color
  };

  return (
    <div style={containerStyle}>
      <span style={textStyle}>Services</span>
    </div>
  );
};

const YourComponent2 = () => {
  const containerStyle = {
    width: '267px',
    height: '30px',
    top: '261px',
    left: '115px',
    gap: '0px',
    opacity: '0px',
    position: 'absolute',
  };

  const textStyle = {
    fontFamily: 'Poppins',
    fontSize: '17px',
    fontWeight: 500,
    lineHeight: '30px',
    textAlign: 'left',
    color: '#C8A21C', // Text color
  };

  return (
    <div style={containerStyle}>
      <span style={textStyle}>OUR SERVICES FOR CLIENTS</span>
    </div>
  );
};

function Service() {
  return (
    <div style={{height:'100vh'}}>
      <div className="container" style={{ marginTop: '9%'}}>
        <div style={{marginTop:'9%'}}>
          <p style={{marginLeft:'2%',fontWeight:'normal',fontSize:'600% ',font:'poppins',color:'#cccccc',fontWeight:'bold',marginTop:'2%',marginBottom:'3%'}}>Services</p>
          <p style={{marginLeft:'3%',color:'#C8A21C',font:'poppins',fontSize:'72%',textTransform:'uppercase'}}>skip the middleman : rent or lease directly on to-Let globe</p>
        </div>

        <div class="d-flex justify-content-between" style={{width:'100%',height:'45%',position:'relative',marginTop:'6%',marginBottom:'4%'}}>
          <div class="box1">
            <div class="box12">
              <img src={Image1} alt="" style={{width:'30%',height:'40%'}}/>
            </div> 
            <div class="box13">
              <p class="here" style={{color:'black',marginLeft:'5%',marginTop:'2%',fontWeight:'bold'}}>Paying Guest</p>
              <div class="box14">
                Find budget-frinedly and Convient
                paying guest accomadations for a
                Comfortable stay away from home
              </div>
            </div>
          </div>

          <div class="box1">
            <div class="box12">
              <img src={Image2} alt="" style={{ width: '30%', height: '40%' }} />
            </div>
            <div class="box23">
              <p class="here" style={{ color: 'black', marginLeft: '5%', marginTop: '2%',fontWeight:'bold' }}>Flat</p>
              <div class="box14">
                Discover a diverse range of
                apartments for rent, customize
                to suit your lifestyle and budget
              </div>
            </div>
          </div>

          <div class="box1">
            <div  class="box12">
              <img src={Image3} alt="" style={{width:'30%',height:'40%'}}/>
            </div> 
            <div class="box13">
              <p class="here" style={{color:'black',marginLeft:'5%',marginTop:'2%',fontWeight:'bold'}}>House</p>
              <div class="box14">
                Search for your dream home,
                available for rent or sale, tailored to
                your lifestyle and preferences
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between" style={{width:'100%',height:'45%',position:'relative'}}>
          <div  class="box1">
            <div class="box12">
              <img src={Image4} alt="" style={{width:'30%',height:'40%'}}/>
            </div> 
            <div class="box23">
              <p class="here" style={{color:'black',marginLeft:'5%',marginTop:'2%',fontWeight:'bold'}}>Shop</p>
              <div class="box14">
                Explore a variety of retail spaces and
                shops available for lease, ideal for
                growing your business
              </div>
            </div>
          </div>
          <div  class="box1">
            <div class="box12">
              <img src={Image5} alt="" style={{width:'30%',height:'40%'}}/>
            </div> 
            <div  class="box13">
              <p class="here" style={{color:'black',marginLeft:'5%',marginTop:'2%',fontWeight:'bold'}}>Office</p>
              <div class="box14">
                Elevate your workspace and
                productivity with modern office
                spaces for ent, designed for success
              </div>
            </div>
          </div>
          <div  class="box1">
            <div class="box12">
              <img src={Image6} alt="" style={{width:'30%',height:'40%'}}/>
            </div> 
            <div class="box23">
              <p class="here"  style={{color:'black',marginLeft:'5%',marginTop:'2%',fontWeight:'bold'}}>Warehouse</p>
              <div class="box14">
                Secure the perfect godwon space
                for rent, offering ample storage
                and logistics solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
