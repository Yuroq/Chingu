
import react, { useEffect, useState } from 'react'
import '../components/Metrics.css'
import MassChart from './MassChart'






function SummaryMetrics() {
const [MetricsData,setMetricsData] = useState([])
const [showMetrics, setShowMetrics] = useState(false)
const [requestedMeteors, setRequestedMeteors] = useState([])
const arr = []
useEffect(() => {
fetch(
    `https://data.nasa.gov/resource/gh4g-9sfh.json`,
    {
    
    })
    .then((response) => response.json())
    .then((json) => {
      setMetricsData(json);
    json.map((meteor) => {
 meteor.recclass == 'L5' ? arr.push(meteor) : ""
    })
  setShowMetrics(true)

    })
    
    .catch((err) => {
  console.log(err);
    })
   
},[])

useEffect(() => {
console.log(arr)
},[])

// useEffect(() => {
//   {showMetrics && MetricsData[0].map((Meteor) => {


  
//     if(Meteor.recclass === 'L5') {
//       const newMeter = [...requestedMeteors,Meteor]
//       setRequestedMeteors(newMeter)
//     }
//       })
//   }
// },[])

useEffect(() => {


  
},[])
MetricsData.map((Meteor) => {

  // {Meteor.recclass === 'L5' && setRequestedMeteors(Meteor) }
    
      // if(Meteor.recclass === 'L5') {
      //   const newMeter = [...requestedMeteors,Meteor]
      //   setRequestedMeteors(newMeter)
      // }
        })
console.log(requestedMeteors)
let numberOfStrikes = 0
let AverageMass = 0
console.log(MetricsData)
function getByname() {

return <div>
  {MetricsData[0].map((Meteor) => (
    <div>
{Meteor.name === 'A' ?( numberOfStrikes++, AverageMass += Math.ceil(Meteor.mass)) : ''}
</div>
  ))}
  </div>
}


function getByYear() {

return <div>
  {MetricsData[0].map((Meteor) => (
    <div>
{Meteor.year.includes('2012') ? console.log(Meteor) : console.log(Meteor.year).split(' ')}
</div>
  ))}
  </div>
}

function getByComposition() {
//   {showMetrics && MetricsData[0].map((Meteor) => {
// Meteor.recclass === 'L5' ? (numberOfStrikes++, AverageMass += Math.ceil(Meteor.mass)
//     ,arr.push(Meteor)) : ''
//     // if(Meteor.recclass === 'L5') {
//     //   const newMeter = [...requestedMeteors,Meteor]
//     //   setRequestedMeteors(newMeter)
//     // }
//       })
//   }
  console.log(MetricsData)


setShowMetrics(true)
console.log(numberOfStrikes)
  {/* {console.log(Math.ceil(AverageMass / numberOfStrikes))} */}
  

}
function getByRange() {
  console.log(MetricsData)
return <div>
  {MetricsData[0].map((Meteor) => (
    <div>
{Meteor.name === 'A' ? console.log(Meteor) : ''}
</div>
  ))}
  </div>
}

// {showMetrics && MetricsData.map((Meteor) => {
//   Meteor.recclass === 'L5' ? (numberOfStrikes++, AverageMass += Math.ceil(Meteor.mass)
//       ,arr.push(Meteor)) : ''
//       // if(Meteor.recclass === 'L5') {
//       //   const newMeter = [...requestedMeteors,Meteor]
//       //   setRequestedMeteors(newMeter)
//       // }
//         })
//     }


return <div>
    <div className='Metrics-div'>

{/* {MetricsData.map((Meteor,index) => (
  <div key={index}>
<h2>{Meteor.name}</h2>
<h2>{Meteor.mass}</h2>

</div>
))} */}
<MassChart SelectedMeteor={MetricsData}/>
{showMetrics &&  <h2 style={{color:'purple',fontSize:'40px'}}>{numberOfStrikes}</h2>}
 <h2>{Math.ceil(AverageMass / numberOfStrikes)}</h2>

<button onClick={getByname}>Name</button>
<button onClick={getByYear}>Year</button>
<button onClick={getByComposition}>Composition</button>
<button onClick={getByRange}>Range</button>
</div>

</div>

}

export default SummaryMetrics;

