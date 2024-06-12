import QUIZ_LOGO from '../assets/quiz-logo.png'

export default function Header (){

    return(
        <header>
            <img src={QUIZ_LOGO} alt = "logo react app"/>
            <h1>React Quiz</h1>
        </header>
    )
}