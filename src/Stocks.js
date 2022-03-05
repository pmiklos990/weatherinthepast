import React from "react";
import "./App.css";
import {dailyDates} from "./data";

export const Stocks = () => {
    return (
        <div className="stock-container">
            Welcome to stock
            {dailyDates.map((data, key) => {
                return (
                    <div key={key}>
                        {data.datum +
                        " , " +
                        data.minT + 
                        " , "}
                    </div>
                );
            })}
        </div>

    );

};