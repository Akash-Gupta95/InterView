import mongoose from 'mongoose';

const QuestionBank = "QuestionBank";

export const connectDB = (mongoCridintial)=>{
    mongoose.connect(mongoCridintial+QuestionBank ).then(()=>{
        console.log("DataBase Is connected");
    }).catch((Error)=>{
        console.log(Error)
    })
}
