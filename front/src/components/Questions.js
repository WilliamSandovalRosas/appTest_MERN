import React, { useEffect, useState } from 'react'
import '../styles/Questions.css'
import data from '../database/data'

export default function Questions() {

    const [checked, setChecked]=useState(undefined)

    const question = data[0];

    useEffect(()=>[
      //console.log(question)
    ])

    function onSelect(){
        setChecked(true)
        console.log('change radio button')
    }
  return (
    <div className='questions'>
      <h3>{question.question}</h3>

      <ul key={question.id}>
          {
            question.options.map((q,i) => (
              <li key={i}>
                  <input type="radio"
                  value={true}
                  name="options"
                  id={`q${i}-option`}
                  onChange={onSelect}/>
                  <label className='' htmlFor={`q${i}-option`}>{q}</label>
                  {/* <div className='check checked'></div> */}
              </li>
            ))
          }
      </ul>
    </div>
  )
}
