import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import GreetingPage from './pages/GreetingPage.jsx'
import IntroductionPage from './pages/IntroductionPage.jsx'
import QuestionPage from './pages/QuestionPage.jsx'
import CongratulationsPage from './pages/CongratulationsPage.jsx'
import TryAgainPage from './pages/TryAgainPage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "greeting",
    element: <GreetingPage />
  },
  {
    path: "introduction",
    element: <IntroductionPage />
  },
  {
    path: "question",
    element: <QuestionPage />
  },
  {
    path: "congratulations",
    element: <CongratulationsPage />
  },
  {
    path: "tryagain",
    element: <TryAgainPage />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
