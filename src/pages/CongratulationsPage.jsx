import { useLayoutEffect } from 'react';
import '../css/CongratulationsPage.css'

export default function CongratulationsPage() {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = 'rgb(152, 195, 232)'
    });

    return (
        <>
            <div className="congratulations-container">
                <img src="./src/imgs/mochj_cat_spread_flowers.gif" />

                <h1>Congratulations!!!</h1>

                <p>
                    Thank you for allowing me into your extraordinary life!
                    You have been special to me, and I hope we can continue
                    this memorable journey together!
                </p>

                <p className='signature'>
                    - Samuel Yechanie "Samoyie" Kwak
                </p>
            </div>
        </>
    )
}