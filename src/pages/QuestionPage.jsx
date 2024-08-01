import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom'
import '../css/QuestionPage.css'

export default function QuestionPage() {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = 'rgb(152, 195, 232)'
    });

    return (
        <>
            <div className="question-container">
                <img src="./src/imgs/mochj_cat_give_flower.gif" />

                <h1>May I offer you flowers?</h1>

                <div className="answers-container">
                    <button>
                        <Link to="/congratulations">Yes!!!</Link>
                    </button>
                    <button>
                        <Link to="/tryagain">Nu</Link>
                    </button>
                </div>
            </div>
        </>
    )
}