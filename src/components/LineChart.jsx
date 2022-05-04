import {useState, useEffect} from 'react'
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip} from 'chart.js'
import { Line } from 'react-chartjs-2'

//Register components from chartjs library to enable usage
ChartJS.register(
   LinearScale,
   CategoryScale,
   LineElement,
   PointElement,
   Tooltip,
)

const LineChart = (props) => {

   const [chart, setChart] = useState([])
   const initial = props.valueInitial
   const monthly = props.valueMonthly

   var baseUrl = `http://www.mocky.io/v2/5e69de892d00007a005f9e29?mocky-delay=2000ms`

   const fetchData = async() => {
         await fetch(`${baseUrl}`, {
            method: 'GET',
            headers: {
               'Content-Type' : 'application/json',
            }
         }).then((response) => {
         response.json().then((json) => {
            setChart(json)
         })
      }).catch(error => {
         console.log(error);
      })
   }

      useEffect(() => {
      fetchData()
   }, [])

   //Configs for the line chart
   var data = {

         type: 'line',
         //x-axis label
         labels: chart?.map(x => x.yearMonth.split("-")[0]),
         datasets: [
            {  
               //Configs for top 25% | Response field -> expectedAmounts['75']
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
               //Configs for median | Response field -> expectedAmounts['50']
               label: "Median",
               data: chart?.map(x => x.expectedAmounts['50']),
               tension: 0.1,
               pointRadius: 0,
               backgroundColor: '#226F54',
               borderColor: '#226F54',
               fill: '+2',
            },
            {
               //Configs for bottom 10% | Response field -> expectedAmounts['10']
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
               //Configs for benchmark | Response field -> expectedAmounts['benchmark']
               label: "Benchmark",
               data: chart?.map(x => x.expectedAmounts['benchmark']),
               tension: 0.1,
               pointRadius: 0,
               backgroundColor: '#3A435E',
               borderColor: '#3A435E',
               fill: false,
            },
            {
               //Configs for total deposit | Response field -> totalDeposit
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

      //ChartJS x,y scales and tooltips config
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
         //Enables tooltip to show all values
         interaction: {
            mode: 'index',
            intersect: false,
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