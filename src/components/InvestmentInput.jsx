import { useState } from "react"
import ReactDOM from 'react-dom/client'


function InvestmentInput() {
const [valueInitial, setValueInitial] = useState("");
const [valueMonthly, setValueMonthly] = useState("");
const recommended = 1000 + Math.floor(Math.random() * (1000 - 1 + 1) + 1);

   return (
      <form>
         <div class="formContainer">
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
      </form>
   )
}

export default InvestmentInput