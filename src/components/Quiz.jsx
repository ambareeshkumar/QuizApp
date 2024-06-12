import { useCallback, useState } from "react"
import QUESTIONS from '../questions';
import QuizCompLogo  from '../assets/quiz-complete.png'
import Questions from './Questions'


export default function Quiz(){

    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswer.length 
    const quizCompleted = activeQuestionIndex === QUESTIONS.length;


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer ){
        setUserAnswer((prevAns)=>{
           return  [...prevAns, selectedAnswer]
        })
    },[])

    const handleSkipAnswer = useCallback(()=>{
        handleSelectAnswer(null)
    },[handleSelectAnswer])

    if (quizCompleted){
        return(
        <div id = "summary">
            <img src = {QuizCompLogo} alt = "Quiz completed"/>
            <h2>Quiz completed</h2>
        </div>
        )
    }

    return(
       <div id="quiz">
            <Questions
            key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
       </div>
    )
} 