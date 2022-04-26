import { useState } from "react"
import Loader from "../sharedAssets/Loader";
import LineChart from "./LineChart";

function InvestmentInput() {
const [valueInitial, setValueInitial] = useState("");
const [valueMonthly, setValueMonthly] = useState("");
const [isLoading, setIsLoading] = useState(false);
const recommended = 1000 + Math.floor(Math.random() * (1000 - 1 + 1) + 1);

const onChange = (e) => {
   e.preventDefault();
   const investment = { valueInitial, valueMonthly };

   setIsLoading(true);

   fetch('http://www.mocky.io/v2/5e69de892d00007a005f9e29?mocky-delay=2000ms', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify(investment)
   }).then(() => {
      console.log("new data added")
      setIsLoading(false);
   }).catch(error => {
         console.log(error);
      })
}

   return (
      <form onChange={onChange}>
         <div className="formContainer">
            <div id="container1">
               <label id="label1">Initial investment</label>
                  <input id="input1"
                  type="text"
                  value={valueInitial}
                  onChange= {(e) => setValueInitial(e.target.value)}
                  placeholder="S$100,000,000"
                  />
                  
            </div>
            <div id="container2">
               <label id="label2">Monthly Investment</label>
                  <input id="input2"
                  type="text"
                  value={valueMonthly}
                  onChange= {(e) => setValueMonthly(e.target.value)}
                  placeholder="S$1,140"
                  />
                  <div id="recommended">
                     Recommended:
                     <span>S${recommended.toLocaleString()}</span>
                     <button type='button'>i</button>
                  </div>
            </div>
         </div>
         {isLoading ? <Loader /> : <LineChart />}
      </form>
   )
}

export default InvestmentInput