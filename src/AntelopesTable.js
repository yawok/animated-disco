import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import React, { useState} from 'react'


function AntelopeRow({ antelope }) {
	return (
		<tr>

			<td className="hover-pointer">
				<OverlayTrigger
					key={antelope.name}
					placement='top'
					overlay={
						<Tooltip id={`tooltip-${antelope.name}`}>
							<img src={antelope.picture} alt={antelope.name} />
						</Tooltip>
					}
				>
					<a href={antelope.picture} target='_blank' rel="noreferrer"><span>{antelope.name}</span></a>
				</OverlayTrigger>
			</td>
			<td>{antelope.continent}</td>
			<td>{antelope.weight}</td>
			<td>{antelope.height}</td>
			<td>{antelope.horns}</td>
		</tr>
	)
}

function AntelopeTableHeader({ handleSort, headerName, sortColumn, sortOrder }) {
	const isSorted = sortColumn === headerName.toLowerCase();
	const arrow = isSorted ? (sortOrder === 'asc' ? '▲' : '▼') : ''

	return <th
		onClick={() => handleSort({ headerName })}
		className="hover-pointer">
		{headerName} {isSorted && arrow}
	</th>
}

function AntelopeTable({ antelopes }) {
	let rows = []
	let headers = []
	const [sortColumn, setSortColumn] = useState(null)
	const [sortOrder, setSortOrder] = useState('asc')

	const handleSort = (column) => {
		column = column.toLowerCase()
		if (sortColumn === column) {
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
		} else {
			setSortColumn(column)
			setSortOrder('asc')
		}
	};

	// Handle sorting based on set column
	antelopes.sort((a, b) => {
		const aValue = a[sortColumn];
		const bValue = b[sortColumn];
		if (sortOrder === 'asc') {
			return aValue > bValue ? 1 : -1;
		} else {
			return aValue < bValue ? 1 : -1;
		}
	});


	antelopes.forEach(antelope => {
		const name = antelope.name
		rows.push(<AntelopeRow antelope={antelope} key={name} />)
	})


	const headings = ["Name", "Continent", "Weight", "Height", "Horns"]
	headings.forEach((key) => {
		headers.push(<AntelopeTableHeader key={key} handleSort={() => handleSort(key)} headerName={key} sortColumn={sortColumn} sortOrder={sortOrder} />)
	})


	return (
		<table>
			<thead>
				<tr>
					{headers}
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	)
}

export default AntelopeTable