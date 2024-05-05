import './App.css'
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import { multiStepContext } from "./contaxt/contaxtApi";
import { useState } from 'react';
import AddQuestion from './pages/AddQuestion';
import {useGSAP} from "@gsap/react"
import gsap from "gsap";

function App() {







  const [Bank, setBank] = useState({
    subject: "Fatching....",
    topics: [
      {
        name: "Fatching....",
        qandA: [
          {
            q: "Q1. What is hoisting in JavaScript, and how does it affect the execution of code?",
            ans: "Ans. lorwem jhj kjk jklj kjhgjk hkj klk l;k lkjk jkh jk"
          },
          {
            q: " Q2. Explain the difference between function hoisting and variable hoisting in JavaScript.",
            ans: "Ans. lorwem jhj kjk jklj kjhgjk hkj klk l;k lkjk jkh jk"
          },
          // Add more questions and answers here...
        ]
      }
      

      // Add more topics here...
    ]
} );
  const [topic, setTopics] = useState([]);
  const [subject, setSubject] = useState([]);
  const [allSubject , setAllSubject] = useState();


  


  return (
    <>
   <div className="mainContainer">
  <multiStepContext.Provider  value={{ Bank, setBank, topic, setTopics , setSubject , setAllSubject , allSubject}}>
    <Routes>

    <Route path={'/'} Component={HomePage} />
    <Route path={'/AddQuestion'} Component={AddQuestion} />
   
    </Routes>
    </multiStepContext.Provider>
    </div>
    </>
  )
}

export default App
