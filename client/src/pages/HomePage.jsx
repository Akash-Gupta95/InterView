import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../component/DefaultLayout";
import Topics from "../component/Topics";
import DisplayQuestion from "../component/DisplayQuestion";
import { multiStepContext } from "../contaxt/contaxtApi";
import axios from "axios";
import './pageStyle.css';
import { BASEURL } from "../config";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";



const HomePage = () => {
  const { Bank, setBank, topic, setTopics, setSubject , subject , allSubject , setAllSubject} = useContext(multiStepContext);
 // Function to animate with GSAP
 const GsapAnimation = () => {
  useGSAP(()=>{
    gsap.from(".SubjectList div", {
      delay: 0.7,
      x: -400,
      opacity: 0,
      stagger: 0.2
    });


    gsap.from("div",{
      x:-400
    })


  })


};


  GsapAnimation();


  



  // Finding Question for Particular Topic
  let topicName = topic;
  let topic5 = Bank && Bank.topics.find((topic) => topic.name === topicName);
  let qAndAArray = topic5 ? topic5.qandA : [];

  // Function to handle subject selection
  const HandleSubject = async (event) => {
    setTopics("")
    // Check if event is defined
    if (!event || !event.target || event.target.textContent === undefined) {
      // If event is undefined or event.target is undefined or event.target.textContent is undefined, set a default subject
      let getsubject = "JavaScript";

      try {
        const response = await axios.post(`${BASEURL}/api/bank/getBySubject/${getsubject}`);

        if (response.data == null) {
          return;
        } else {
          setBank(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      // If event is defined and event.target.textContent is defined, use the value of event.target.textContent
      let getsubject = event.target.textContent;

      try {
        const response = await axios.post(`${BASEURL}/api/bank/getBySubject/${getsubject}`);

        if (response.data == null) {
          console.log(response);
          return;
        } else {
          setBank(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  // Function to handle fetching all subjects
  const HandleAllSubject = async (e)=>{
    const allSubject = await axios.get(`${BASEURL}/api/bank/getallSubject`);
    setAllSubject(allSubject);
  }

  // useEffect to handle initial subject selection and fetching all subjects
  useEffect(()=>{
    HandleSubject();
    HandleAllSubject();
  }, []);

  return (
    <DefaultLayout>
      {/* Rendering list of all subjects */}
      <div className="SubjectList subjectContainer d-flex m-3">
        {allSubject?.data.map((e ,i)=>{
          return (
            <div className="col" key={i} onClick={HandleSubject}>
              {e.subject}
            </div>
          )
        })}
      </div>

      {/* Displaying topics and questions */}
      <div className="displayAreas">

      <div className="div " >
        <Topics Bank={Bank} />
      </div>
        <DisplayQuestion Questions={qAndAArray} topic={topic}></DisplayQuestion>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
