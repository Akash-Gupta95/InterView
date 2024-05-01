import QuestionBankModel from "../models/QuestionBankModel.js";



export const QBank = async (req, res) => {
  try {
    // const subject = req.params.subject;

    // console.log(subject)
    const Bank = await QuestionBankModel.find();

    res.json(Bank);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
};

export const GetSingleQBank = async (req, res) => {
  try {
    const subject = req.params.subject;

    console.log("Subject", subject);
    const Bank = await QuestionBankModel.findOne({ subject: subject });

    res.json(Bank);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
};

// export const addQuestion = async (req, res)=>{

//   try{

//     const doc = new QuestionBankModel(
//       Bank2
//     );

//      await doc.save();

//      res.status(200).json("Data saved")

//   }catch(error){
//     res.send( error)

//   }
// }

export const addSubquestions = async (req, res) => {
  // Route to add subquestions and answers to a particular topic

  try {
    const { questionData } = req.body; // Assuming subQuestions is an array of subquestions and answers
    const subject = questionData.subject;
    let qa = {
      topics: questionData.topic,
      q: questionData.Question,
      ans: questionData.answer,
    };
    // // Find the topic by its ID
    const subjects = await QuestionBankModel.findOne({ subject });
    if (!subjects) {
      return res.status(404).json({ error: "Subject not found" });
    }
    let topic5 =
      subjects &&
      subjects.topics.find((topic) => topic.name === questionData.topic);

    if (!topic5) {
      // If the topic doesn't exist, create a new one
      let topics = {
        name: questionData.topic,
        qandA: [{ q: questionData.Question, ans: questionData.answer }],
      };

      subjects.topics.push(topics);
    }

    let qAndAArray = topic5 ? topic5.qandA : [];

    qAndAArray.push(qa);

    // // Save the updated topic back to the database
    const updatedTopic = await subjects.save();
  
    // res.status(200).json(updatedTopic);
  } catch (error) {
    console.error("Error adding subquestions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
