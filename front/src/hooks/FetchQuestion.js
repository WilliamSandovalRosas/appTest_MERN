import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getServerData }  from "../helper/helper";
import data from '../database/data';
/** redux actions */
import * as Action from '../redux/question_reducer'

/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */
        (async () => {
            try {

                let questions = await data;
                //const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
                
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));

                    /** dispatch an action */
                    dispatch(Action.startExamAction(questions))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}


/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}



/* import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'

export default function ResultTable() {

    const [data, setData] = useState([])

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res)
        })
    })

  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
} */





/* /**Fetch question hook to fetch api data and set value to store */

/* import { useEffect, useState } from "react"

import data from "../database/data"
import { useDispatch } from "react-redux"

/**redux actions */

/*
import * as Action from '../redux/question_reducer'

export const useFetchQuestion = ()=>{

    const dispatch = useDispatch();
    const [getData,setGetData] = useState({
        isLoading:false,
        apiData:[],
        serverError:null
    })

    useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}));
        /**Async function  fetch backend data */
/*
        (async()=>{
            try {

                let question = await data;

                if(question.length>0){
                    setGetData(prev=>({...prev,isLoading:false}));
                    setGetData(prev=>({...prev,apiData:question}));

                    dispatch(Action.startQuizAction(question));
                }
                else{
                    throw new Error ("No question avalilable");
                }
                
            } catch (error) {
                setGetData(prev=>({...prev,isLoading:false}));
                setGetData(prev=>({...prev,serverError:error}));
            }

        })();
    },[dispatch]);

    return [getData,setGetData]

} 
 */

