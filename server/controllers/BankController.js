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
// export const addSubquestions = async (req, res) => {
//   // Route to add subquestions and answers to a particular topic

//   try {
//     const { questionData } = req.body;
//     const { subject, topic, Question, answer } = questionData;

//     // Check if required fields are provided
//     if (!subject || !topic || !Question || !answer) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     // Find the subject by its name
//     const subjectDocument = await QuestionBankModel.findOne({ subject });

//     if (!subjectDocument) {
//       return res.status(404).json({ error: "Subject not found" });
//     }

//     // Find or create the topic
//     let topicDocument = subjectDocument.topics.find((t) => t.name === topic);

//     if (!topicDocument) {
//       topicDocument = {
//         name: topic,
//         qandA: [],
//       };

//       subjectDocument.topics.push(topicDocument);
//     }

//     // Add the question and answer to the topic
//     topicDocument.qandA.push({ q: Question, ans: answer });

//     // Save the updated subject back to the database
//     await subjectDocument.save();

//     res.status(200).json({ message: "Subquestion added successfully" });
//   } catch (error) {
//     console.error("Error adding subquestions:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

export const addSubquestions = async (req, res) => {
  // Route to add subquestions and answers to a particular topic

  try {
    const { questionData } = req.body;
    const { subject, topic, Question, answer } = questionData;

    // Check if required fields are provided
    if (!subject || !topic || !Question || !answer) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Find the subject by its name
    const subjectDocument = await QuestionBankModel.findOne({ subject });

    if (!subjectDocument) {
      return res.status(404).json({ error: "Subject not found" });
    }

    // Find or create the topic
    let topicDocument = subjectDocument.topics.find((t) => t.name === topic);

    if (!topicDocument) {
      topicDocument = {
        name: topic,
        qandA: [],
      };

      subjectDocument.topics.push(topicDocument);
    }

    // Add the question and answer to the topic
    topicDocument.qandA.push({ q: Question, ans: answer });

    // Save the updated subject back to the database
    await subjectDocument.save();

    res.status(200).json({ message: "Subquestion added successfully" });
  } catch (error) {
    console.error("Error adding subquestions:", error);

    // Check for specific database-related errors
    if (error.name === "MongoError") {
      if (error.code === 11000) {
        // Duplicate key error (e.g., unique index violation)
        return res.status(400).json({ error: "Duplicate key error" });
      } else {
        // Other MongoDB errors
        return res.status(500).json({ error: "Database error" });
      }
    }

    res.status(500).json({ error: "Internal server error" });
  }
};
