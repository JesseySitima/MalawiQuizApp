import { useEffect, useState } from "react";
import { getRandomQuestions } from "../../services/QuestionServices";
import Question from "./Question";


const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [nextQuestionVisible, setNextQuestionVisible] = useState(false);
    const [resultVisible, setResultVisible] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchQuestions = async () => {
            const fetchedQuestions = await getRandomQuestions();
            setQuestions(fetchedQuestions);
        };

        fetchQuestions();
    }, []);

    const selectAnswer = (choiceId) => {
        if (currentQuestion.correctAnswer === choiceId) {
            setScore(score + 1);
        }
        if (currentQuestionIndex + 1 !== questions.length){
            setNextQuestionVisible(true);
        }else {
            setResultVisible(true);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <Question data={currentQuestion} selectAnswer={selectAnswer} currentQuestionIndex={currentQuestionIndex + 1} />
        </div>
    );
};

export default Quiz;
