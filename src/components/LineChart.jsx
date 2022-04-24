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
               tension: 0.1,
               borderDash: [3],
               pointRadius: 0,
               backgroundColor: '#8F7E4F',
               borderColor: '#8F7E4F',
               fill: 'origin',
            },
            {
               label: "Median",
               data: chart?.map(x => x.expectedAmounts['50']),
               tension: 0.1,
               pointRadius: 0,
               backgroundColor: '#226F54',
               borderColor: '#226F54',
               fill: '+2',
            },
            {
               label: "Bottom 10%",
               data: chart?.map(x => x.expectedAmounts['10']),
               tension: 0.1,
               borderDash: [3],
               pointRadius: 0,
               backgroundColor: '#DEDBD8',
               borderColor: '#DEDBD8',
               fill: 1,
            },
            {
               label: "Benchmark",
               data: chart?.map(x => x.expectedAmounts['benchmark']),
               tension: 0.1,
               pointRadius: 0,
               backgroundColor: '#3A435E',
               borderColor: '#3A435E',
               fill: false,
            },
            {
               label: "Total deposit",
               data: chart?.map(x => x.totalDeposit),
               tension: 0.1,
               pointRadius: 0,
               backgroundColor: '#E75A7C',
               borderColor: '#E75A7C',
               fill: '-2',
            },
      ]
      }

      var options = {

         maintainAspectRatio: false,
         //tooltip configurations
         plugins: {
            filler: {
               propogate: true,
            },
            tooltip: {
               tooltipFillColor: "rgba(100,100,100,1)",
               titleColor: "#B49A67",
               backgroundColor: '#FFFFFF',
               borderColor: '#808080',
               borderWidth: 0.5,
               cornerRadius: 0,
               bodyColor: '#000000',
               displayColors: true,
            },
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