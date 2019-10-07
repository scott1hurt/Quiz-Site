/*
This is an IIFE - Immediately Invoked Function Expression
IIFEs run as soon as they are defined. IIFEs are commonly used to keep variables/functions outside  of the global scope and they tend to work better if you're running multiple scripts.
*/

(function(){
    //Because this variable is inside of an IIFE, it is not in the global scope, it's more secure!
    var variable = 10; 

    //Make references to our elements that we're going to interact with
    var quizContainer= document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var resetButton = document.getElementById("reset");

  
    var myQuestions = [];

    //What does quiz question consist of?
    //Question text, answer choices, Correct answer

    var question1 = { 
        question = "What color is the sky?",
        answers: {
            a: "Blue",
            b: "Brown",
            c: "Green",

        },
        correctAnswer: "a"
    }

    console.log(exampleQuestion.question); //Get the question text
    console.log(exampleQuestion.answers.b); //Get answer b

    varquestion2= {
        question= "What's the largest country population-wise?", 
        answers: {
            a: "USA",
            b: "Russia",
            c: "China"
        },
        correctAnswer: "c"
    }

    varquestion3 = {
        question = "What's the northernmost US state?",
        answers: {
            a: "Nebraska",
            b: "Alaska",
            c: "North Dakota"
        },
        correctAnswer: "b"
    }
    varquestion4 = {
        question = "What's the capital of Hungary?",
        answers:{
            a: "Madrid",
            b: "Des Moines",
            c: "Budapest", 
            d: "Vienna"
    },
        correctAnswer: "c"
    }
    //Add the question objects to our array of questions
    myQuestions.push(question1, question2, question3);

    // Function to build a quiz that goes thru our question objects and generates html for each question
    function buildQuiz(){

    }
    //Function to show the results of the quiz
    function showResults(){

    }
    //Function to reset the quiz
    function resetQuiz(){

    }
    

})();