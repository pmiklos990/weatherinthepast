import React from 'react';
import database from '../firebase/firebase';
import HungaryMap from './HungaryMap';
import moment from 'moment'
import '../css/dailyPage.css'


class  DailyPage extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
        datum: "",
        Tmax: "",
        Tmin: "",
        Tavg: "",
        precArt: "",
        precSum: "" ,
        DE_datum: "",
        DE_Tmax: "",
        DE_Tmin: "",
        DE_Tavg: "",
        DE_precArt: "",
        DE_precSum: "" ,
        SZE_datum: "",
        SZE_Tmax: "",
        SZE_Tmin: "",
        SZE_Tavg: "",
        SZE_precArt: "",
        SZE_precSum: "" ,
        SZO_datum: "",
        SZO_Tmax: "",
        SZO_Tmin: "",
        SZO_Tavg: "",
        SZO_precArt: "",
        SZO_precSum: "" ,
        PE_datum: "",
        PE_Tmax: "",
        PE_Tmin: "",
        PE_Tavg: "",
        PE_precArt: "",
        PE_precSum: ""      
      };

     
  };


    setDatum = (e) =>{
      e.preventDefault();
      const datum =  e.target.elements.InputDailyDatum.value.trim();
      const year =  parseInt(datum.substr(0,4));
      const month = datum.substr(5,2);
      const day = datum.substr(8,2);
      if (year > 1900 && year < 2021) {
        if ((month >= '01' && month <= '09') || ((month >= '10' && month <= '12'))) {
          if ((day >= '01' && day <= '09') || ((day >= '10' && day <= '31'))) {
            this.state = {
              datum : e.target.elements.InputDailyDatum.value.trim()
            }
            this.addDailyDates();
          } 
        }
      }
    }

   

      addDailyDates = () => {
        const datum = this.state.datum;
        const year = datum.substr(0,4);
        const month = datum.substr(5,2);
        const day = datum.substr(8,2);

        let refDatum='Budapest/'+year+'/'+month+'/'+day;
        let firebaseref=database.ref(refDatum);
        firebaseref.once('value').then((dataSnapshot) => {
            if (dataSnapshot.val()) {
              this.setState({
                datum: datum,
                Tmax: dataSnapshot.val().Tmax,
                Tmin: dataSnapshot.val().Tmin,
                Tavg: dataSnapshot.val().Tavg,
                precArt: dataSnapshot.val().precArt+"",
                precSum: dataSnapshot.val().precSum+""
              });

            }
           
           
       }); 

        refDatum ='Pecs/'+year+'/'+month+'/'+day;
        firebaseref=database.ref(refDatum);
        firebaseref.once('value').then((dataSnapshot) => {
          if (dataSnapshot.val()) {
            this.setState({
              PE_datum: datum,
              PE_Tmax: dataSnapshot.val().Tmax,
              PE_Tmin: dataSnapshot.val().Tmin,
              PE_Tavg: dataSnapshot.val().Tavg,
              PE_precArt: dataSnapshot.val().precArt+"",
              PE_precSum: dataSnapshot.val().precSum+""
            });

          }
            
       }); 

        refDatum='Szeged/'+year+'/'+month+'/'+day;
        firebaseref=database.ref(refDatum);
        firebaseref.once('value').then((dataSnapshot) => {
          if (dataSnapshot.val()) {
            this.setState({
              SZE_datum: datum,
              SZE_Tmax: dataSnapshot.val().Tmax,
              SZE_Tmin: dataSnapshot.val().Tmin,
              SZE_Tavg: dataSnapshot.val().Tavg,
              SZE_precArt: dataSnapshot.val().precArt+"",
              SZE_precSum: dataSnapshot.val().precSum+""
            });

          }
            
       }); 

        refDatum='Debrecen/'+year+'/'+month+'/'+day;
        firebaseref=database.ref(refDatum);
        firebaseref.once('value').then((dataSnapshot) => {
          if (dataSnapshot.val()) {
            this.setState({
              DE_datum: datum,
              DE_Tmax: dataSnapshot.val().Tmax,
              DE_Tmin: dataSnapshot.val().Tmin,
              DE_Tavg: dataSnapshot.val().Tavg,
              DE_precArt: dataSnapshot.val().precArt+"",
              DE_precSum: dataSnapshot.val().precSum+""
            });
          }
        
         }); 

        refDatum='Szombathely/'+year+'/'+month+'/'+day;
        firebaseref=database.ref(refDatum);
        firebaseref.once('value').then((dataSnapshot) => {
          if (dataSnapshot.val()) {
            this.setState({
              SZO_datum: datum,
              SZO_Tmax: dataSnapshot.val().Tmax,
              SZO_Tmin: dataSnapshot.val().Tmin,
              SZO_Tavg: dataSnapshot.val().Tavg,
              SZO_precArt: dataSnapshot.val().precArt+"",
              SZO_precSum: dataSnapshot.val().precSum+""
            });

          }
            
           
       }); 


      }

      minusDailyDates = () => {
        const date = Date.parse(this.state.datum);      
        this.state = {
          datum: moment(date).subtract(1, 'days').format("YYYY-MM-DD")
        }
        this.addDailyDates();
      }

      pluszDailyDates = () => {
        const date = Date.parse(this.state.datum);      
        this.state = {
          datum: moment(date).add(1, 'days').format("YYYY-MM-DD")
        }
        this.addDailyDates();
      }

    render () {
        return (
            <div>
              <div >
                  {this.state.datum && <button name="prev" onClick={this.minusDailyDates} className="buttonLeft" >
                      Előző nap
                  </button> }
                  <form  onSubmit={this.setDatum} className="datumForm" >
                      <input type="text"  pattern="\d{1,4}-\d{1,2}-\d{1,2}" name="InputDailyDatum" placeholder="éééé-hh-nn" className="textInput">
                      </input>
                      <button name="add" className="buttons">
                      Betölt
                      </button>
                                 
              </form>
              {this.state.datum &&  <button name="next" onClick={this.pluszDailyDates} className="buttonRight">
                      Köv. nap
              </button>}
              {this.state.datum && <div className="titel" key={this.state.datum}> {this.state.datum}-i időjárás:</div>}  
            </div>
           
            
            {this.state.datum ? <HungaryMap 
              className="HungaryMap"
              tmax={this.state.Tmax} 
              tmin={this.state.Tmin} 
              precArt={this.state.precArt}
              precSum={this.state.precSum}
              SZE_tmax={this.state.SZE_Tmax} 
              SZE_tmin={this.state.SZE_Tmin} 
              SZE_precArt={this.state.SZE_precArt}
              SZE_precSum={this.state.SZE_precSum}
              DE_tmax={this.state.DE_Tmax} 
              DE_tmin={this.state.DE_Tmin} 
              DE_precArt={this.state.DE_precArt}
              DE_precSum={this.state.DE_precSum}
              PE_tmax={this.state.PE_Tmax} 
              PE_tmin={this.state.PE_Tmin} 
              PE_precArt={this.state.PE_precArt}
              PE_precSum={this.state.PE_precSum}
              SZO_tmax={this.state.SZO_Tmax} 
              SZO_tmin={this.state.SZO_Tmin} 
              SZO_precArt={this.state.SZO_precArt}
              SZO_precSum={this.state.SZO_precSum}
            /> : <div className="simpleText">Adjon meg egy dátumot 1901-01-01 és 2020-12-31 között.</div>}

        </div>
        );
    };

};

DailyPage.defaultProps = {
    datum: "",
    tmax: "",
    tmin: ""

  };




export default DailyPage;