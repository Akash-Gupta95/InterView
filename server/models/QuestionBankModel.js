import mongoose from "mongoose";

const QuestionBankSchema =new  mongoose.Schema({
    subject:{
        type:String,
        required : true,
    },
    topics:[
        {
            name:{
             type:String,

            },
            qandA:[
                {
                    q:{
                        type:String
                    },
                    ans:{
                        type:String
                    }
                }
           
            ]
        }
    ]
})

const QuestionBankModel = mongoose.model("Bank", QuestionBankSchema);
export default QuestionBankModel;