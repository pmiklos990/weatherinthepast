import React from 'react';
import '../css/dashboardPage.css'

const DashboardPage = () => (
    <div className="welcomeText">
        <p>Kedves Látogató!</p>
        <div>Ezen az oldalon az Országos Meteorológiai Szolgálat nyíltan elérhető éghajlati adatsorai kerülnek szemléltetésre.</div>
        <div>Budapest, Debrecen, Szeged, Pécs és Szombathely időjárását követheted vissza 1901 és 2020 között napi, illetve havi kimutatásokban.</div>
        <div>Kellemes böngészést!</div>
        
        <div className="littleText">Az adatok elérhetőek a https://www.met.hu/eghajlat/magyarorszag_eghajlata/eghajlati_adatsorok/ címen.</div>
        <div className="littleText"> A háttérkép a fortepan.hu-ról felhasználva (86027 -Schmidt Albin).</div>
      

    </div>
);

export default DashboardPage;