import ContinentsPieChart from './charts/ContinentsPieChart.js'
import HornsPieChart from './charts/HornsPieChart.js'
import WeightHeightScatterChart from './charts/WeightsHeightsScatterChart.js'
import HornsBarChart from './charts/HornsBarChart.js'
import AntelopeTable from './AntelopesTable.js'

function Main({ antelopes }) {
	/* Main component that brings all the charts and the table together. */

	return <>
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
	</>
}

export default Main