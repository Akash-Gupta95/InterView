import React , {useContext}from "react";
import { multiStepContext } from "../contaxt/contaxtApi";

const Topics = ( {Bank} ) => {
  const { setTopics } = useContext(multiStepContext);

  let subject  = Bank.subject;
  const handleTopic =(event)=>{
    
    setTopics(event);
   

  }



  return (
    <div className=" topic-container">
     
      <div className="topic-header">
        <h2>{subject}</h2>
      </div>
      <div className="topics">
        <ul>
        {Bank.topics.map((t , index)=> <li key={index}  onClick={(event)=>handleTopic(event.target.textContent)}>{t.name}</li>) ?? "Getting"}
      
        </ul>
      </div>
    </div>
    
  );

};

export default Topics;
