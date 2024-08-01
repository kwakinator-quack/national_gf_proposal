import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom'
import '../css/TryAgainPage.css'

export default function TryAgainPage() {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = 'rgb(152, 195, 232)'
    });

    return (
        <>
            <div className="tryagain-container">
                <img src="./src/imgs/bugcat_heartbroken_crying.gif" />

                <h1>Please try again?</h1>

                <div className="answers-container">
                    <button>
                        <Link to="/question">Yes</Link>
                    </button>
                    <button>Nu</button>
                </div>
                
            </div>
        </>
    )
}