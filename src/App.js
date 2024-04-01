import './App.css'
import ContinentsPieChart from './charts/ContinentsPieChart.js'
import HornsPieChart from './charts/HornsPieChart.js'
import WeightHeightScatterChart from './charts/WeightsHeightsScatterChart.js'
import HornsBarChart from './charts/HornsBarChart.js'
import AntelopeTable from './AntelopesTable.js'

import React, { useState, useEffect } from 'react'

export default function App() {
  const [antelopes, setAntelopes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      fetch('/species.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json()
        })
        .then(data => {
          setAntelopes(data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        })
    }
    fetchData()
  }, [])



  return (
    <div className='App'>
      <div className='heading'>
        <h1 className='App-Header'>anteData</h1>
        <h3>A dataset of antelopes and some interesting facts</h3>
      </div>
      <div className="Antelope-Table">
        <AntelopeTable antelopes={antelopes} />
      </div>

        <h2>Charts</h2>

      <div className='chartsContainer'>
        <div className='pieChartRow'>
          <div className="chart">
            <ContinentsPieChart data={antelopes} />
          </div>
          <div className="chart">
            <HornsPieChart className="chart" antelopeData={antelopes} />
          </div>
        </div>
        <div className='chartRow'>
          <HornsBarChart antelopeData={antelopes} />
        </div>
        <div className='chartRow'>
          <WeightHeightScatterChart antelopeData={antelopes} />
        </div>
      </div>
    </div >

  )

}

