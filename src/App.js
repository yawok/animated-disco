import ReactLoading from 'react-loading'
import './App.css'
import Main from './components/Main.js'
import Error from './components/Error.js'

import React, { useState, useEffect } from 'react'

export default function App() {
  const [antelopes, setAntelopes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      // Full url: https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json
      // Using a proxy set in the package.json to avoid CORS header error. 

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
          setError(true)
        })
      setIsLoading(false)
    }

    fetchData()
  }, [])


  return (
    <div className='App'>
      {isLoading ?
        <div className='spinner'>
          <ReactLoading color="#C5BCC7" type="spin" width={150} height={150} />
        </div> :
        error ?
          <Error message={"Unable to fetch data. Try again later."} /> :
          <Main antelopes={antelopes} />}
    </div >

  )

}

