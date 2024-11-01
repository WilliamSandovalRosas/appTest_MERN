import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import data from '../database/data'
import { questionReducer } from '../redux/question_reducer'

/** Custom Hook */
import { useFetchQestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'


export default function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError},setGetData] = useFetchQestion()

        //const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const questions = data[1]
   /*  const question = useSelector(state=>state.questions.queue[state.questions.trace]) */
    const dispatch = useDispatch()

    useEffect(()=>{
        //console.log(isLoading);
        //console.log(apiData);
        //console.log(serverError);
        console.log(questions)
    })

   /*  useEffect(() => {
        dispatch(updateResult({ trace, checked}))
    }, [checked]) */
    
    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked}))
    }


    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions.question}</h2>

        <ul key={questions.id}>
            {
                questions.options.map((q, i) => (
                    <li key={i}>
                        <input
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}





















/* import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


/** Custom Hook */
/* import { useFetchQestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'


export default function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError}] = useFetchQestion() 

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateResult({ trace, checked}))
    }, [checked])
    
    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked}))
    }


    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>

        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
 */ 


















// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import Quiz from './Quiz'

// import '../styles/Questions.css'
// //import data from '../database/data'

// /**Custom hook */

// import { useFetchQestion } from '../hooks/FetchQuestion'
// import { updateResult } from '../hooks/setResult'

// export default function Questions({onCheckeed}) {

//     /* const [checked, setChecked]=useState(undefined)

//     const [{isLoading,apiData,serverError}, setGetData] = useFetchQuestion()

//     const question = data[0]
//     const questions  = useSelector(state=>state.questions.queue[state.questions.trace])
//    const trace = useSelector(state=>state.questions.trace) */

//     const [checked, setChecked] = useState(undefined)
//     const { trace } = useSelector(state => state.questions);
//     const result = useSelector(state => state.result.result);
//     const [{ isLoading, apiData, serverError}] = useFetchQestion() 

//     const questions = useSelector(state => state.questions.queue[state.questions.trace])
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(updateResult({ trace, checked}))
//     }, [checked])

//     function onSelect(i){
//       onChecked(i)
//       setChecked(i)
//       dispatch(updateResult({ trace, checked}))
//   }

//   if(isLoading) return <h3 className='text-light'>isLoading</h3>
//   if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>
//   return (
//     <div className='questions'>
//       <h3>{questions?.question}</h3>

//       <ul key={questions?.id}>
//           {
//             questions.options.map((q,i) => (
//               <li key={i}>
//                   <input type="radio"
//                   value={true}
//                   name="options"
//                   id={`q${i}-option`}
//                   onChange={()=>onSelect(i)}/>
//                   <label className='' htmlFor={`q${i}-option`}>{q}</label>
//                   {/* <div className='check checked'></div> */}

//                   <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
//               </li>
//             ))
//           }
//       </ul>
//     </div>
//   )
// }
