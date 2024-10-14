import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)

  return (

    <div className='container'>
        <div className='App-header'>
            <nav>
                <a>Create Quiz</a>
                <a>About Us</a>
            </nav>
        </div>
        <div className='container-content'>
            <h1>Quiz Application</h1>
            <h2>Instructions</h2>
            <ol>
                <li>You will be asked 10 questions one after another</li>
                <li>10 points is awarded for the correct answer</li>
                <li>Each qustion has three options, you should select one option.</li>
                <li>You can review and change the answers before the quiz finish.</li>
                <li>The result will be declared and the end of the quiz.</li>
            </ol>

            <form>
                <input ref={inputRef} type='text' placeholder='Username*'/>
            </form>

            <div className='start'>
                <Link className='btn' to={'quiz'}>Start Quiz</Link>
            </div>
        </div>

    </div>
  )
}

