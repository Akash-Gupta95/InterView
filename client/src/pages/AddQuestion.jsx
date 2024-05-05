import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./pageStyle.css";
import axios from "axios";
import { multiStepContext } from "../contaxt/contaxtApi";
import "./AddQuestionStyle.css";
import DefaultLayout from "../component/DefaultLayout";
import { BASEURL } from "../config";

const AddQuestion = () => {
  const { allSubject } = useContext(multiStepContext);
  const [subject, setSubject] = useState("JavaScript");
  const [topic, setTopic] = useState({});
  const [Question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [AllTopicBySubjectlist, setAllTopicBySubjectlist] = useState();
  const [bool, setBool] = useState(true);

  const HandleSubmit = async () => {
    // Ensure that all required fields are provided
    if (!subject || !topic || !Question || !answer) {
      console.error("Missing required fields");
      return;
    }

    const questionData = { subject, topic, Question, answer };

    try {
      const response = await axios.post(
        `${BASEURL}/api/bank/add-subquestions`,
        { questionData }
      );
      console.log("Subquestion added successfully:", response.data);
      setQuestion("");
      setAnswer("");
    } catch (error) {
      console.error("Error adding subquestion:", error);
    }


   
  };

  const HandeTopic = () => {
    // Toggle the boolean state
    setBool((prevBool) => !prevBool);
  };

  useEffect(() => {
    const AllTopicBySubject =
      allSubject && allSubject.data.find((topic) => topic.subject === subject);
    setAllTopicBySubjectlist(AllTopicBySubject);
  }, [setSubject, subject]);

  return (
    <DefaultLayout>
      <div>
        <div className="container-fluid addQContainer bg-dark">
          <div className="row addQuestionRowDiv">
            {/* Subject coloum for display */}

            {/* Rendering list of all subjects */}
            <div className="SubjectList subjectContainer d-flex m-3"></div>

            {/* Extrating All Subject from SUbject List */}
            <div className="col-12 SubjectDiv">
              <select
                name=""
                id=""
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                {allSubject?.data.map((e, i) => {
                  return <option value={e.subject}>{e.subject}</option>;
                })}
              </select>
            </div>

            {/* Topic coloum for display Topic  */}
            <div className="col-12 topicContainer">
              <div className="col-6">
                {bool ? (
                  <div className="selectBox">
                    <select
                      name=""
                      id=""
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    >
                      {AllTopicBySubjectlist?.topics?.map((topics, i) => (
                        <option key={i} value={topics.name}>
                          {topics.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="AddTopicBox">
                    <input
                      type="text"
                      placeholder="Enter New Topic"
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>
                )}
              </div>
              <div className="col-6">
                <div className="btn btn-warning" onClick={HandeTopic}>
                  Add-Topic
                </div>
              </div>
            </div>

            <div className="col-12 QuestionAnsDiv">
              <textarea
                name="Question"
                id=""
                cols="50"
                rows="5"
                placeholder="Enter Your Question"
                value={Question}

                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>

              <textarea
                name="ans"
                id=""
                cols="50"
                rows="5"
                placeholder="  Enter Your Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              ></textarea>
            </div>

            <div className="col-12 submitBtn">
              <div className="btn btn-primary" onClick={HandleSubmit}>
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddQuestion;
