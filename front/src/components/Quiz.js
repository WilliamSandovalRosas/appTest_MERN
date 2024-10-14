import React from 'react'
import '../styles/Main.css'
import '../styles/Quiz.css'

export default function Quiz() {
  return (
    <div className='container'>
        <div className='container-content'>
            <h1>Resolve the Quiz</h1>
            <div>
                <btn className='btn prev'>Prev</btn>
                <btn className='btn next'>Next</btn>
            </div>

        </div>
      
    </div>
  )
}
