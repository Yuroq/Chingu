import React, { useEffect, useState } from "react";
import classes from '../components/TotalStrikes.module.css'
function TotalStrikes() {
    const [data, setData] = useState([])
    useEffect(() => {
        // Fetch data from NASA API
        fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(item => item.recclass === 'L5');
				setData(filteredData)
               
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])
let prev = 0
    return (<div class="overflow-x-auto">
    <table class="table table-xs">
      <thead>
        <tr>
          <th></th> 
          <th>Name</th> 
          <th>Mass</th> 
          <th>Latitude</th> 
          <th>Longitude</th> 
          <th>Year</th> 
          <th>Fall</th>
        </tr>
      </thead> 
      <tbody>
      { data.map((Meteor) => (
  
      
  <tr>
  <th>{prev += 1}</th> 
  <td>{Meteor.name}</td> 
  <td>{Meteor.mass}</td> 
  <td>{Meteor.reclat}</td> 
  <td>{Meteor.reclong}</td> 
  <td>{Meteor.year && Meteor.year.match(/^\d{4}/)[0]}</td> 
  <td>{Meteor.fall}</td>
</tr>
  
  
        
    ))}
        </tbody>
    </table>
  </div>
    )
    
}

export default TotalStrikes;


