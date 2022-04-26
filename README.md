# `Endowus Mission 1`

Used [Create React App](https://github.com/facebook/create-react-app) as the boilerplate. </br>
</br>
run tool: </br>
`npm start` </br>

to open a preview of this README.md file: </br>
`Ctrl+Shift+V`

## Components
- [Header](/src/components/Header.jsx)
- [InvestmentInput](/src/components/.jsx)
- [LineChart](/src/components/LineChart.jsx)

## Shared Assets
- [Loading-Spinner](/src/sharedAssets/Loader.jsx)

## Logic
- [Header](/src/components/Header.jsx) </br>
A pure html component that contains the description of the projection/investment plan. 
   </br></br>
- [InvestmentInput](/src/components/.jsx) </br>
Users will key into two input fields in order to return chart projection
   1. ***valueInitial*** (Their intended initial investment amount)
   2. ***valueMonthly*** (Their intended monthly investment amount)
   
   
   HTTP ***POST*** method is invoked whenever the user changes their ***valueInitial*** or ***valueMonthly*** field. </br>
   ```
   fetch('http://www.mocky.io/v2/5e69de892d00007a005f9e29?mocky-delay=2000ms', {
         method: 'POST',
         headers: { 'Content-Type' : 'application/json'},
         body: JSON.stringify(investment)
      }
   ``` 
   For simulation purposes, I created a variable to display an arbitrary value for the ***recommended*** field whenever the user generates a new scenario. </br>

   The [Loading-Spinner-gif](/src/Misc/blueSpinner.gif) will appear as a buffer whenever the user changes their input values. [LineChart](/src/components/LineChart.jsx) will appear after data has been successfully sent into the server.
   </br></br>
- [LineChart](/src/components/LineChart.jsx) </br>
   Utilised [ChartJS](https://www.chartjs.org/) library to include an animated line graph to display the user's plan projection.</br></br>
   Ideally, props(***valueInitial*** and ***valueMonthly***) should be passed down from InvestmentInput into LineChart component so as to fetch the required data when  HTTP ***GET*** method is invoked here. </br></br>
   Plenty of time was spent trying to navigate and understand the documentation for ***ChartJS***. :face_with_thermometer: 

   ```
   var data
   ```
   contains the key configuration of the graph; displays the graph accordingly to the datasets invoked. </br>
   Five key datasets</br>
      1. expectedAmounts[‘75’] (top 25% outcome of the investment projection)
      2. expectedAmounts[‘50’] (median outcome of the investment projection)
      3. expectedAmounts[‘10’] (bottom 10% of the invesment projection)
      4. expectedAmounts['benchmark'] (benchmark)
      5. totalDeposit (Total deposit)
   </br>
   </br>
   ```
   var options
   ```
   contains the configuration for scale styles and tooltips settings. 

   # End of my README.md
   </br></br>



# Miscellaneous 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
