import { useEffect, useState } from "react"


export default function QuestionTimer ( {onTimeout, timeout, mode}){

    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(()=>{
        const timer = setTimeout(onTimeout, timeout)
        console.log('timer set')

        return ()=>{
            clearTimeout(timer)
            setRemainingTime(timeout)
            console.log('timer remove')
        }
    },[onTimeout,timeout])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainingTime((prevTime)=> prevTime - 100)
        },100)

        return ()=>{
            clearInterval(interval);
        }
    },[])

    return(
        <progress id = "question-time" className={mode} value = {remainingTime} max={timeout} ></progress>
    )
}