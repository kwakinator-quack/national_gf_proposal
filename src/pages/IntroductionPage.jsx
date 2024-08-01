import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom'
import '../css/IntroductionPage.css'

export default function IntroductionPage() {    
    useLayoutEffect(() => {
        document.body.style.backgroundColor = 'rgb(152, 195, 232)'
    });

    return (
        <>
            <div className="introduction-container">
                <img src="./src/imgs/mochj_cat_3_petting.gif"/>

                <h1>Today is National Girlfriend's Day. So...</h1>

                <button className="nextPage-btn">
                    <Link to='/question'>Click Here Again!</Link>
                </button>
            </div>
        </>
    )
}