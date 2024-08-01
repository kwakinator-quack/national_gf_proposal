import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom'
import '../css/GreetingPage.css'

export default function GreetingPage() { 
  useLayoutEffect(() => {
    document.body.style.backgroundColor = 'rgb(152, 195, 232)'
  });

  return (
    <>
      <div className='greeting-container'>
        <img src='./src/imgs/cute_hello.gif' />

        <button className="nextPage-btn">
            <Link to='/introduction'>
                Click Here!
            </Link>
        </button>
      </div>
    </>
  ) 
}