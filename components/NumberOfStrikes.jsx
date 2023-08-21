import React from "react";
import { useState, useEffect } from "react";
import StrikesData from "./StrikesData";
function NumberOfStrikes() {
    const [meteorData, setMeteorData] = useState([])
    const [showComposition, setShowComposition] = useState(false)

    let Yearone = 0
    let Yeartwo = 0
    let Yearthree = 0
    let Yearfour = 0
    let Yearfive = 0
    useEffect(() => {
        fetch(
            `https://data.nasa.gov/resource/gh4g-9sfh.json`,
            {
            
            })
            .then((response) => response.json())
            .then((json) => {
              setMeteorData([json]);
          setShowComposition(true)
        
            })
            
            .catch((err) => { 
          console.log(err);
            })
        
        },[])
        console.log(meteorData)
        {showComposition && meteorData[0].map((Meteor) => (
          <div>

    {Meteor.recclass === 'H5' && Meteor.year.split('-')[0] > 1800 && Meteor.year.split('-')[0]  < 1850 ? Yearone++ : ''}   
    {Meteor.recclass === 'H5' && Meteor.year.split('-')[0]  > 1850 && Meteor.year.split('-')[0]  < 1900 ? Yeartwo++ : ''}     
    {Meteor.recclass === 'H5' && Meteor.year.split('-')[0]  > 1900 && Meteor.year.split('-')[0]  < 1950 ? Yearthree++ : ''}     
    {Meteor.recclass === 'H5' && Meteor.year.split('-')[0]  > 1950 && Meteor.year.split('-')[0]  < 2000 ? Yearfour++ : ''}  
    {Meteor.recclass === 'H5' && Meteor.year.split('-')[0]  > 2000 && Meteor.year.split('-')[0]  < 2025 ? Yearfive++ : ''}  
    
      </div>
        ))}
console.log(Yearfive)
      return <div>
  
        <StrikesData Year1={Yearone} Year2={Yeartwo} Year3={Yearthree}Year4={Yearfour} Year5={Yearfive}/>
        </div>


}

export default NumberOfStrikes;


  