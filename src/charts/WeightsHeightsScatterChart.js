import { defaults } from 'chart.js/auto'
import { Scatter } from "react-chartjs-2"

defaults.maintainAspectRatio = false
defaults.responsive = true
defaults.plugins.title.display = true
defaults.plugins.title.align = 'center'
defaults.plugins.title.font.size = 24
defaults.plugins.title.font.color = "#000000"

const WeightHeightScatterChart = ({antelopeData}) => {

    const weightsAndHeights = antelopeData.map((antelope) => ({ "x": antelope.weight, "y": antelope.height }))
	console.log(weightsAndHeights)
    const LABELS = antelopeData.map((antelope) => (antelope.name))
    const DATA = {
        labels: LABELS,
        datasets: [
            {
                label: "Antelopes",
                data: weightsAndHeights,
                backgroundColor: "#8B8BAE"
            }
        ]
    }

    const OPTIONS = {
		plugins: {
			title: {
				text: "Weights agianst Heights"
			}
		},
		scales: {
			x: {
				title: {
					display: true,
					text: "Weights",
					font: {
						size: 16,
						weight: "bold"
					}
				}
			},
			y: {
				title: {
					display: true,
					text: "Heights",
					font: {
						size: 16,
						weight: "bold"
					}
				}
			}
		}
	}

    return <Scatter data={DATA} options={OPTIONS}/>
}

export default WeightHeightScatterChart