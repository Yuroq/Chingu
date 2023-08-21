// import React, { useState, useEffect } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';

// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// function MassChart() {
//     const [dataPoints, setDataPoints] = useState([]);
//     let previousY = 0;

//     useEffect(() => {
//         // Fetch data from NASA API
//         fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
//             .then(response => response.json())
//             .then(data => {
//                 // Filter the fetched data to include only items with recclass equal to 'L5'
//                 const filteredData = data.filter(item => item.recclass === 'L5');

//                 // Transform the filtered data into the desired format
//                 const transformedData = filteredData.map(item => {
//                     // Increment the Y-axis value by a fixed amount (50) for each data point
//                     previousY += 50;

//                     return {
//                         label: item.name,
//                         x: item.mass,
//                         y: previousY,
//                         z: 4000 // You can replace this with the appropriate property from your API data
//                     };
//                 });

//                 // Update the dataPoints state with the transformed data
//                 setDataPoints(transformedData);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []); // Empty dependency array means this effect runs once, like componentDidMount

//     const options = {
//         // Your other chart options here
//         data: [{
//             type: "bubble",
//             indexLabel: "{label}",
//             toolTipContent: "<b>{label}</b><br>Mass: {x}<br>Y-Axis Value: {y}<br>Diameter: {z} miles",
//             dataPoints: dataPoints // Use the transformed data here
//         }]
//     };

//     return (
//         <div>
//             <CanvasJSChart options={options} />
//         </div>
//     );
// }

// export default MassChart;



/* App.js */
/* App.js */
import React, { PureComponent, useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


let totalMass = 0
let previousY = 0;
export default function MassChart() {



	    const [dataPoints, setDataPoints] = useState([]);
      const [showData, setShowData] = useState(false)
    useEffect(() => {
        // Fetch data from NASA API
        fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
            .then(response => response.json())
            .then(data => {
                // Filter the fetched data to include only items with recclass equal to 'L5'
                const filteredData = data.filter(item => item.recclass === 'L5');
console.log(filteredData)
                // Transform the filtered data into the desired format
                const transformedData = filteredData.map(item => {
                    // Increment the Y-axis value by a fixed amount (50) for each data point
                    previousY += 50;
					totalMass += +item.mass
                    return {
				
                        label: item.name,
                        x: previousY,
                        y: +item.mass,
                        z: 2000,
						            year: item.year
						
						// You can replace this with the appropriate property from your API data
                    };
                });

                // Update the dataPoints state with the transformed data
				
                setDataPoints(transformedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
            setShowData(true)
          }, []);

console.log(totalMass)
const data = dataPoints
    return (
		<div>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="weight"  />
          <YAxis type="number" dataKey="y" name="mass" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Meteor" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
{showData && <h2>Average Mass: {Math.ceil((totalMass / dataPoints.length)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>}
{showData && <h2>Amount of meteors: {dataPoints.length}</h2>}
	  </div>
	
    );
  }
