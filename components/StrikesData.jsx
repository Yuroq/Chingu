/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function StrikesData(props) {
const year1 = props.Year1
const year2 = props.Year2
const year3 = props.Year3
const year4 = props.Year4
const year5 = props.Year5

		const options = {
			title: {
				text: "Meteor by years"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "1800-1850",  y: year1  },
					{ label: "1850-1900", y: year2  },
					{ label: "1900-1950", y: year3  },
					{ label: "1950-2000",  y: year4  },
					{ label: "2000-2025",  y: year5  }
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}

export default StrikesData;   