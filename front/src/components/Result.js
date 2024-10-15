import React from 'react'
import '../styles/Main.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'


export default function Result() {

  function restart(){
    console.log("On restart")
  }
  return (
    <div className='container-content'>
      <h1>Quiz's Result</h1>

      <div className='contaniner-score'>
        <span>Username </span>
        <span>William Sandoval Rosas</span>
      </div>
      <div className='contaniner-score'>
        <span>Total Quiz Points </span>
        <span>50</span>
      </div>
      <div className='contaniner-score'>
        <span>Total Questions </span>
        <span>5</span>
      </div>
      <div className='contaniner-score'>
        <span>Total Attempts: </span>
        <span>3</span>
      </div>
      <div className='contaniner-score'>
        <span>Total Earn Points </span>
        <span>30</span>
      </div>
      <div className='contaniner-score'>
        <span>Quiz Result </span>
        <span>Passed</span>
      </div>

      <div className='start'>
         <Link className='btn' to={'/'} onClick={restart}>Restart Quiz</Link>
      </div>

      <div className='container-table'>
        <ResultTable></ResultTable>
      </div>

    </div>
  )
}
