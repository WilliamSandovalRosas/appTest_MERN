

import React, { useEffect, useState } from 'react'
import Questions from './Questions'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

/** redux store import */
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Quiz() {
    //const state=useSelector(state=>state);

    const { questions } = useSelector(state=>state); 

    useEffect(()=>{
        //console.log(questions.queue);
    })
    const [check, setChecked] = useState(undefined)

    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()

    /** next button event handler */
    function onNext(){
        if(trace < queue.length){
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            /** insert a new result in the array.  */
            if(result.length <= trace){
                dispatch(PushAnswer(check))
            }
        }
     
        /** reset the value of the checked variable */
        setChecked(undefined)
    }

    /** Prev button event handler */
    function onPrev(){
        if(trace > 0){
            /** decrease the trace value by one using MovePrevQuestion */
            dispatch(MovePrevQuestion());
        }
    }

    function onChecked(check){
        setChecked(check)
    }

    /** finished exam after the last question */
    if(result.length && result.length >= queue.length){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        {/* display questions */}
        <Questions onChecked={onChecked} />

        <div className='grid'>
            { trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}



















/* import React, { useEffect } from 'react'
import '../styles/Main.css'
import '../styles/Quiz.css'
import './Questions.js'
import Questions from './Questions.js'

/**redux store import */
/*
import {useSelector} from 'react-redux' */

/* import React, { useEffect, useState } from 'react'
import Questions from './Questions'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

/** redux store import *//*
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom' */


/* export default function Quiz() {

   const state= useSelector(state => state.questions.trace)

    useEffect(()=>{
       //console.log(state)
    })

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
} */

/* 
  export default function Quiz() {

    const [check, setChecked] = useState(undefined)

    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()

    /** next button event handler */
    /*function onNext(){
        if(trace < queue.length){
            /** increase the trace value by one using MoveNextAction */
            // dispatch(MoveNextQuestion());

            /** insert a new result in the array.  */
           /* if(result.length <= trace){
                dispatch(PushAnswer(check))
            }
        }*/
     
        /** reset the value of the checked variable */
      /*   setChecked(undefined)
    } */

    /** Prev button event handler */
    /*function onPrev(){
        if(trace > 0){
            /** decrease the trace value by one using MovePrevQuestion */
            /*dispatch(MovePrevQuestion());
        }
    }

    function onChecked(check){
        setChecked(check)
    }

    /** finished exam after the last question */
    /*if(result.length && result.length >= queue.length){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        {/* display questions *//*}
        <Questions onChecked={onChecked} />

        <div className='grid'>
            { trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
} */
