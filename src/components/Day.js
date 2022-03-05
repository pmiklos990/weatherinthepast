import React from 'react';
  const Day = (props) => {
    return (
      
      <div className="MonthlyTable">
            <div className="MonthlyCell">{props.day}:</div>
            <div className="MonthlyCell">{props.tmin} </div>
            <div className="MonthlyCell"> {props.tmax} </div>
            <div className="MonthlyCell">{props.precSum} mm</div>
            <div className="MonthlyCell">{props.precArt} </div>
            
        
        
        
       
      </div>
    );
  };
  export default Day;