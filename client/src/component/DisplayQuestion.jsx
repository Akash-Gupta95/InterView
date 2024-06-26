import React from 'react'

const DisplayQuestion = ({Questions , topic}) => {

  return (
    <div className="display">
       <div className="topic-header">
        <h2>{topic}</h2>
      </div>
      <div className="topics">
        <ul>
          {Questions.map((Q , index)=> {return <div className='QuestionList' key={index}>{`Q ${index + 1}.  ${Q.q}`}
          <li key={index}>{`Ans. ${Q.ans}`}</li>
          </div>})}
        </ul>
      </div>
    </div>
  )
}

export default DisplayQuestion;