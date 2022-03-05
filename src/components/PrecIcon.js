import React from "react";
import Switch, { Case, Default } from 'react-switch-case';

const PrecIcon = (props) => {

    const precSum=parseInt(props.precSum);

    switch (props.precArt) {
        case "0":
            return <div>ködszitálás</div>;
            break;
        case "1":
            return  (precSum < 3  ? <div>kisebb eső</div> : <div>eső</div> );
            break;
        case "2":
            return <div>ónos eső</div>;
            break;
        case "3":
            return <div>zápor</div>;
            break;
        case "4":
            return (precSum < 3  ? <div>kisebb havazás</div> : <div>havazás</div> );
            break;
        case "5":
            return <div>hózápor</div>;
            break;
        case "6":
            return <div>jégdara</div>;
            break;
        case "7":
            return <div>zivatar</div>;
            break;
        case "8":
            return <div>hózivatar</div>;
            break;
        case "9":
            return <div>zivatar jégesővel</div>;
            break;
        case "10":
            return <div>dörgés</div>;
            break;
        case "11":
                return (precSum == 0  ? <div>csapadékmentes</div> : <div>---</div> );
                break;
            
      default:
        return <p></p>;
    }
};

export default PrecIcon;