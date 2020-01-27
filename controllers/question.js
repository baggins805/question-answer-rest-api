const Question = require("../models/Question");

const errorWrapper = require("../helpers/errorWrapper");
const CustomError = require("../helpers/customError");


const getAllQuestions = errorWrapper(async(req,res,next) => {

    const questions = await Question.find({});

    return res
    .status(200)
    .json({
        success : true,
        count : questions.length,
        data : questions
    });

});
const askNewQuestion = errorWrapper(async(req,res,next) => {

    const information = req.body;
    console.log({
        ...information,
        user : req.user.id
    });

    const question  = await Question.create({
        ...information,
        user : req.user.id
    });

    res.status(200)
    .json({
        success : true,
        message : question
    });
});


module.exports = {
    askNewQuestion,
    getAllQuestions
};
