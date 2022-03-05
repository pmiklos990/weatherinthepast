import React from "react";
import mo from "../mo5.png";
import { Container } from "react-bootstrap";
import PrecIcon from "./PrecIcon";



const HungaryMap = (props) => {
  return (
    <div >
      <Container>
          <div className="Map" >
            <img src={mo} alt="mo" className="responsiveMapImage" />
            <div key={props.tmin}>
              <div className="Budapest" >
                {/*<div>Budapest</div>*/}
                <div>{props.tmin} / {props.tmax}°C</div>
                {/*<i className="wi wi-snow"></i>*/}
                <PrecIcon  precArt={props.precArt} precSum={props.precSum}/> 
              
              </div>

              <div className="Szeged" >
                 {/*<div>Szeged</div>  */}
                <PrecIcon  precArt={props.precArt} precSum={props.precSum}/>
                <div>{props.SZE_tmin} / {props.SZE_tmax} °C</div>
                
              </div>

              <div className="Debrecen" >

                 {/*<div>Debrecen</div>*/}
                <div>{props.DE_tmin} / {props.DE_tmax}°C</div>
                <PrecIcon  precArt={props.precArt} precSum={props.precSum}/>
              </div>

              <div className="Szombathely" >
               {/*<div>Szombathely</div> */}
                <div>{props.SZO_tmin} / {props.SZO_tmax}°C</div>
                <PrecIcon  precArt={props.precArt} precSum={props.precSum}/>
                
              </div>

              <div className="Pecs" >
                 {/*<div>Pecs</div> */}
                <PrecIcon  precArt={props.precArt} precSum={props.precSum}/>
                <div>{props.PE_tmin} / {props.PE_tmax}°C</div>
                
              </div>
            </div>

         </div>

           
          
         
      </Container>   
    </div>
  );
};

export default HungaryMap;
