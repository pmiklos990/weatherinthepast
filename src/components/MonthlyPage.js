import React from 'react';
import database from '../firebase/firebase';
import DayList from './Daylist';
import '../css/monthlyPage.css'


class  MonthlyPage extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
        data: [],
        monthlyDates: [], 
        days: [],
        Tmaxs:   [],   
        Tmins:   [], 
        Tavgs:   [], 
        PrecSumss:   [], 
        PrecArts:   [] ,
        ListObject: [],
        city: "Budapest",
        datum: ""
      };
     
  };

 


   

      addMonthlyDates = (city, datum) => {
        
        const fok = " °C";
        /*const city = this.state.city.trim();
        const datum = this.state.datum.trim(); */
        const year = datum.substr(0,4);
        const month = datum.substr(5,2);
     
  
        const refDatum=city+'/'+year+'/'+month;
        console.log("refadtum: ", refDatum);
        const firebaseref=database.ref(refDatum);
        let movedDays=[];
        let movedTmaxs=[];
        let movedTmins=[];
        let movedTavgs=[];
        let movedPrecSums=[];
        let movedPrecArts=[];
        firebaseref.once('value').then((dataSnapshot) => {
           
            const proba = dataSnapshot.val();
            
            const days=Object.keys(proba);
            
            days.map(day => {
              
              
              movedDays= [...movedDays, day];
              movedTmaxs= [...movedTmaxs, proba[day].Tmax];
              movedTmins= [...movedTmins, proba[day].Tmin];
              movedTavgs= [...movedTavgs, proba[day].Tavg];
              movedPrecSums= [...movedPrecSums, proba[day].precSum];
              movedPrecArts= [...movedPrecArts, proba[day].precArt];   
            
            })
            

            var i;
            for (i = 0; i < movedDays.length-9; i++) {
              movedDays.push(movedDays.shift());
              movedTmaxs.push(movedTmaxs.shift());
              movedTmins.push(movedTmins.shift());
              movedTavgs.push(movedTavgs.shift());
              movedPrecSums.push(movedPrecSums.shift());
              movedPrecArts.push(movedPrecArts.shift());
            }
            let data = [];
            var i;
            for (i = 0; i < movedDays.length; i++) {
              let object = {
                "Nap": i+1,
                "Max T": Number(movedTmaxs[i]),
                "Min T": Number(movedTmins[i]),
                "Csapadék": Number(movedPrecSums[i]),
                "Csapadék fajta": Number(movedPrecArts[i]),
                "Nulla": 0
                
              };
              data.push(object);
              
            }

 

            this.setState(
              {
                
                data: data

              }
              );

       }); 
       
      }



      selectHandleChange = (e) => {
      e.preventDefault();
      const city = e.target.value.trim();
      const datum = this.state.datum;
      this.setState ({
        
        city: city
  
      });
      if (datum) {
        this.addMonthlyDates(city, datum);
      }
     
        
    }

    inputHandleChange = (e) => {
      e.preventDefault();
      const datum = e.target.value.trim();
      const year =  parseInt(datum.substr(0,4));
      const month = datum.substr(5,2);
      const city = this.state.city;
      if (year > 1900 && year < 2021) {
        if ((month >= '01' && month <= '09') || ((month >= '10' && month <= '12'))) {
          this.setState ({
        
            datum: e.target.value.trim(),
          });
          this.addMonthlyDates(city, datum);

        }

      }


        
    }


    render () {
        return (
            <div>
             
                
                <select id="city" name="city" className="mSelect" onChange={this.selectHandleChange}>
                  <option value="Budapest">Budapest</option>
                  <option value="Debrecen">Debrecen</option>
                  <option value="Szeged">Szeged</option>
                  <option value="Pecs">Pécs</option>
                  <option value="Szombathely">Szombathely</option>
                </select>            
                <input type="text" name="InputDailyDatum" placeholder="éééé-hh"   className="mInput" onChange={this.inputHandleChange} />
                
            
               
                {this.state.data.length > 0 ? <DayList data={this.state.data} /> : <p>Írja be a kívánt dátumot. A havi kimutatás autómatikusan megjelenik!</p>}
            
            
        </div>
        );
    };

};

MonthlyPage.defaultProps = {
    datum: ""

  };





export default MonthlyPage;