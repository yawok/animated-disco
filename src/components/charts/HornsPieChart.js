import { defaults } from 'chart.js/auto'
import { Pie } from "react-chartjs-2"


defaults.maintainAspectRatio = false
defaults.responsive = true
defaults.plugins.title.display = true
defaults.plugins.title.align = 'center'
defaults.plugins.title.font.size = 24
defaults.plugins.title.font.color = "#000000"

const HornsPieChart = ({ antelopeData }) => {

	/* Display a Pie Chart of all the horns available. */
	const hornsCounts = antelopeData.reduce((accumulator, current) => {
		const horn = current.horns;
		accumulator[horn] = (accumulator[horn] || 0) + 1;
		return accumulator;
	}, {})

	const LABELS = Object.keys(hornsCounts)
	const COLORS = ['#8B8BAE', '#C5BCC7', '#AD96C5', '#5E7797', '#293B66', '#0D1321', '#564A59']
	const DATA = {
		labels: LABELS,
		datasets: [
			{
				label: 'Horns',
				data: Object.values(hornsCounts),
				backgroundColor: COLORS,
				borderRadius: 5
			}
		]
	}

	const OPTIONS = {
		plugins: {
			title: {
				text: "Frequency of Horns"
			}
		}
	}
	return <Pie data={DATA} options={OPTIONS} />

}

export default HornsPieChart