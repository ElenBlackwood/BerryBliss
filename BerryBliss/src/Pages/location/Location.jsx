import React from "react";
import GoogleMapReact from 'google-map-react';
import './_location.scss'
import marker from '../../components/assets/icons/drop-pin.svg'
import phoneIcon from '../../components/assets/icons/phone-icon.svg'
import mailIcon from '../../components/assets/icons/mail-icon.svg'
import pointerIcon from '../../components/assets/icons/location-pointer.svg'


const AnyReactComponent = ({ marker }) => <div className="marker"><img src={marker} alt="drop pin" /></div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 44.840000,
      lng: -0.580000
    },
    zoom: 13
  };

  return (
    <section className="location">
      <div className="container flex-container">
        <div className="contact">
        <div className="contact__item">
          <h2 className="title">Contact us</h2>
        </div>
          <div className="contact__item">
            <img src={phoneIcon} alt="phone" />
            <div className="contact__item-text">
              <p>Phone:</p>
              <a href="tel: +777 777 7777">+777 777 7777</a>
            </div>
          </div>
          <div className="contact__item">
            <img src={mailIcon} alt="email" />
            <div className="contact__item-text">
              <p>Email:</p>
              <a href="mailto:office@berrybliss.com">office@berrybliss.com</a>
            </div>
          </div>
          <div className="contact__item">
            <img src={pointerIcon} alt="adress" />
            <div className="contact__item-text">
              <p>Address:</p>
              <p>Bordeaux, City in France</p>
              <a href="https://www.google.com/maps/place/Bordeaux,+France/@44.8636882,-0.6684127,12z/data=!3m1!4b1!4m6!3m5!1s0xd5527e8f751ca81:0x796386037b397a89!8m2!3d44.837789!4d-0.57918!16zL20vMDFiODU?entry=ttu">Look at the map</a>
            </div>
          </div>
        </div>
        <div className="maps">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAbbTgWOFm3XRHBXhLHR1VZBeiRiEvVWEc" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
            }}>
            <AnyReactComponent 
              lat={44.840000}
              lng={-0.580000}
              marker={marker}
            />
          </GoogleMapReact>
      </div>
      </div>
    </section>
    
  );
}