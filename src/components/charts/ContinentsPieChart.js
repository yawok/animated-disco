import { defaults } from 'chart.js/auto'
import { Pie } from "react-chartjs-2"

defaults.maintainAspectRatio = false
defaults.responsive = true
defaults.plugins.title.display = true
defaults.plugins.title.align = 'center'
defaults.plugins.title.font.size = 24
defaults.plugins.title.font.color = "#000000"

const ContinentsPieChart = ({ data }) => {

	/* Display a Pie Chart of all the continents where the antelopes originate. */
	const continentCounts = data.reduce((accumulator, current) => {
		const continent = current.continent;
		accumulator[continent] = (accumulator[continent] || 0) + 1;
		return accumulator;
	}, {});

	const COLORS = ['#8B8BAE', '#C5BCC7']
	const LABELS = Object.keys(continentCounts)
	const DATA = {
		labels: LABELS,
		datasets: [
			{
				label: 'Antelopes',
				data: Object.values(continentCounts),
				backgroundColor: COLORS,
				borderRadius: 5,
				// borderColor: COLORS
			}
		]
	}

	const OPTIONS = {
		plugins: {
			title: {
				text: "Frequency of Continents"
			}
		}
	}

	return <Pie data={DATA} options={OPTIONS} />
}

export default ContinentsPieChart