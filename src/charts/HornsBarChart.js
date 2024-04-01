import {  defaults } from 'chart.js/auto'
import { Bar } from "react-chartjs-2"


defaults.maintainAspectRatio = false
defaults.responsive = true
defaults.plugins.title.display = true
defaults.plugins.title.align = 'center'
defaults.plugins.title.font.size = 24
defaults.plugins.title.font.color = "#000000"


const HornsBarChart = ({ antelopeData }) => {

	const hornsCounts = antelopeData.reduce((accumulator, current) => {
		const horn = current.horns;
		accumulator[horn] = (accumulator[horn] || 0) + 1;
		return accumulator;
	}, {})

	const LABELS = Object.keys(hornsCounts)
	
	const DATA = {
		labels: LABELS,
		datasets: [
			{
				label: 'Horns',
				data: Object.values(hornsCounts),
				backgroundColor: "#8B8BAE",
				borderRadius: 5,
				
			}
		]
	}

	const OPTIONS = {
		plugins: {
			title: {
				text: "Frequency of Horns"
			}
		},
		scales: {
			x: {
				title: {
					display: true,
					text: "Horn Type",
					font: {
						size: 16,
						weight: "bold"
					}
				}
			},
			y: {
				title: {
					display: true,
					text: "Frequency",
					font: {
						size: 16,
						weight: "bold"
					}
				}
			}
		}
	}
	return <Bar data={DATA} options={OPTIONS} />

}

export default HornsBarChart