import React from 'react'
import '../styles/Main.css'
import '../styles/Quiz.css'
import './Questions.js'
import Questions from './Questions.js'

export default function Quiz() {

    function onPrev(){
        alert("Click on prev button")
    }

    function onNext(){
        alert('Click on Next button')
    }
    
  return (
    <div className='container'>
        <div className='container-content'>
            <h1>Resolve the Quiz</h1>

            <Questions></Questions>

            <div className='btn-container'>
                <button className='btn prev' onClick={onPrev}>Prev</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    </div>
  )
}
