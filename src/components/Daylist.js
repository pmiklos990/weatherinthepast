import React from "react";
import '../css/daylist.css'
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer ,
  ReferenceLine
} from "recharts";



const DayList = (props) => (
    <div className="scrollContainer">
      <ResponsiveContainer   width="100%" height={400} maxWidth={1000} minWidth={300} >
            <ComposedChart
                  background-color="#8884d8"
                 
                  data={props.data}
                  margin={{
                    top: 2,
                    right: 2,
                    bottom: 2,
                    left: 2
                  }}
              >   
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="Nap" stroke="darkblue"  fontSize={16}  interval={4}/>
              
                  <YAxis  yAxisId={1}    stroke="darkblue"unit="mm"orientation="right" dataKey="Csapadék"   type="number" domain={[0, 60]} />
                  <YAxis  yAxisId={2} stroke="darkblue" unit="°C"orientation="left" dataKey="Max T"    type="number" domain={[-15, 25]} />
                  <Tooltip />
              
                  <Legend  />
                  <ReferenceLine yAxisId={2} y={-10}  stroke="darkblue" strokeDasharray="3 3"  label="-10"/>
                  <ReferenceLine yAxisId={2} y={0}  stroke="blue" strokeDasharray="3 3"  label="0"/>
                  <ReferenceLine yAxisId={2} y={10}  stroke="green" strokeDasharray="3 3" label="+10" />
                  <ReferenceLine yAxisId={2} y={20}  stroke="darkgreen" strokeDasharray="3 3" label="+20" />
                  <ReferenceLine yAxisId={2} y={30}  stroke="darkred" strokeDasharray="3 3"  label="+30"/>
                  {/*<Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />*/}
                  
                  <Line yAxisId={2} type="monotone" dataKey="Max T" stroke="orange" strokeWidth={4} fontSize={30}/>
                  <Line  yAxisId={2} type="time" dataKey="Min T" stroke="darkred" strokeWidth={4}/>
                  <Bar yAxisId={1}  dataKey="Csapadék" barSize={20} fill="#413ea0" />
                
                  {/*<Scatter dataKey="cnt" fill="red" />*/}
              </ComposedChart>
        
        </ResponsiveContainer>

      


    </div>
    

  
  
 
 
);




  export default DayList;
  