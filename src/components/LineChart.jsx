import {useState, useEffect} from 'react'
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip} from 'chart.js'
import { Line } from 'react-chartjs-2'


ChartJS.register(
   LinearScale,
   CategoryScale,
   LineElement,
   PointElement,
   Tooltip,
)

const LineChart = () => {

   const [chart, setChart] = useState([])

   var baseUrl = "http://www.mocky.io/v2/5e69de892d00007a005f9e29?mocky-delay=2000ms"

   useEffect(() => {
      const fetchData = async() => {
         await fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
               'Content-Type' : 'application/json',
            }
         }).then((response) => {
         response.json().then((json) => {
   
            setChart(json)
            console.log(json)
            console.log("chart", chart)
         })
      }).catch(error => {
         console.log(error);
      })
      }
      fetchData()
   }, [])



   var data = {
         type: 'line',
         labels: chart?.map(x => x.yearMonth.split("-")[0]),
         datasets: [
            {  
               label: "Top 25%",
               data: chart?.map(x => x.expectedAmounts['75']),
               borderColor: '#243119',
               tension: 0.1,
               borderDash: [3],
               pointRadius: 0,
            },
            {
               label: "Median",
               data: chart?.map(x => x.expectedAmounts['50']),
               borderColor: '#466365',
               tension: 0.1,
               pointRadius: 0,
            },
            {
               label: "Bottom 10%",
               data: chart?.map(x => x.expectedAmounts['10']),
               borderColor: '#96BE8C',
               tension: 0.1,
               borderDash: [3],
               pointRadius: 0,
               fill: true,
               backgroundColor: '#ddddff'
            },
            {
               label: "Benchmark",
               data: chart?.map(x => x.expectedAmounts['benchmark']),
               borderColor: '#B49A67',
               tension: 0.1,
               pointRadius: 0,
            },
            {
               label: "Total deposit",
               data: chart?.map(x => x.totalDeposit),
               borderColor: '#CEB3AB',
               tension: 0.1,
               pointRadius: 0,
            },
      ]
      }

      var options = {

         maintainAspectRatio: false,
         tooltips: {
            showToolTips: true,
            tooltipEvents: ["mousemove", "touchstart", "touchmove"],
            mode: 'index',
            intersect: false,
            tooltipFillColor: "rgba(100,100,100,1)",
            tooltipFontSize: 30,
            titleColor: "#B49A67",
            backgroundColor: 'rgba(0, 0, 255, 1)',
         },

         //Makes tooltip show all values
         interaction: {
            intersect: false,
            mode: 'index',
         },
         hover: {
            mode: 'index',
            intersect: false,
         },
         scales: {
            y: {
               beginAtZero: true,
               position: 'right',
               display: true,
               title:{
                  display: true,
                  text: 'Amount (SGD)'
               }
            },
            x: {
               beginAtZero: true,
               position: 'right',
               display: true,
               title:{
                  display: true,
                  text: 'Year'
               },
            },
         },

         legend: {
            labels: {
               fontSize: 26
            }
         },
      }

   return (
      <div>
         <Line 
            data={data}
            height={600}
            options={options}
         />
      </div>
   )
}

export default LineChart