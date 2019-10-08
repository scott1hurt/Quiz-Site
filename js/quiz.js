/*
This is an IIFE - Immediately Invoked Function Expression
IIFEs run as soon as they are defined. IIFEs are commonly used to keep variables/functions outside  of the global scope and they tend to work better if you're running multiple scripts.
*/
//This variable exists in the global scope which means it can be accessed by anything.
var global;

(function(){
})();
    //Because this variable is inside of an IIFE, it is not in the global scope, it's more secure!
    var variable = 10; 

    //Make references to our elements that we're going to interact with
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var resetButton = document.getElementById("reset");

  
    var myQuestions = [];

    //What does quiz question consist of?
    //Question text, answer choices, Correct answer

    var question1 = { 
        question: "What color is the sky?",
        answers: {
            a: "Blue",
            b: "Brown",
            c: "Green"

        },
        correctAnswer: "a"
    }

    console.log(question1.question); //Get the question text
    console.log(question1.answers.b); //Get answer b
    
    var question2 = {
        question: "What's the largest country population-wise?", 
        answers: {
            a: "USA",
            b: "Russia",
            c: "China"
        }, 
        correctAnswer: "c"
    }
    console.log(question2.question);
    console.log(question2.answers.c);
    
    var question3 = {
        question: "What's the northernmost US state?",
        answers: {
            a: "Nebraska",
            b: "Alaska",
            c: "North Dakota"
        },
        correctAnswer: "b"
    }
    var question4 = {
        question: "What's the capital of Hungary?",
        answers:{
            a: "Madrid",
            b: "Des Moines",
            c: "Budapest", 
            d: "Vienna"
    },
        correctAnswer: "c"
    }
    //Add the question objects to our array of questions
    myQuestions.push(question1,question2,question3,question4);


    // Function to build a quiz that goes thru our question objects and generates html for each question
    function buildQuiz(){
   
         //We need to go thru each of our question objects and use them to build out the HTML to show a question.
         for (var i = 0; i < myQuestions.length; i++){
             //Create a display for the question text 
            
             //Creating a new div called questionDiv that will hold information about  a single question
         var questionDiv = document.createElement("div");
             //Get the question text from the question we are looking at with this iteration of the loop
             questionDiv.innerText = myQuestions[i].question;
              //Display the answer choices (and take user input to select an answer)
              
              //Create a div to hold question answers
              var answersDiv = document.createElement("div");
              answersDiv.classList.add("answers");
              
              //For each property in the current question's answers object
              /* A for-in loop is used to go thru the properties of an object */
              for(letter in myQuestions[i].answers){
              //Create the label for the radio button input
                  var label = document.createElement("label");

              //Create a radio button for each answer for this question
              var input = document.createElement("input");
              //Configure the input element
              input.type = "radio";
              input.name = "question" + i;
              input.value = letter;

              label.appendChild(input);

             // Create some text from the current letter we're looking at and the corresponding answer for that letter

                var labelText = document.createTextNode(`${letter}:${myQuestions[i].answers[letter]}`);
              

              //Add the text to the label
              label.appendChild(labelText);
              
              //Add the label to the answers div
               answersDiv.appendChild(label);
            }
             //Once all the answers are added, add the answerDiv to the questionDiv
             questionDiv.appendChild(answersDiv);
              
             //Add the questionDiv to the quizContainer
             quizContainer.appendChild(questionDiv);
        }  
         }
        
    buildQuiz();
    //Function to show the results of the quiz
    function showResults(){
        // Get all the answer containers from our quiz
    var answerContainers = 
        quizContainer.querySelectorAll(".answers");   //This will basically give us an array containing everything in the quizContainer with the class "answers"

        //Variable to keep track of how many they get right
        var numCorrect = 0;

        for (var i = 0; i < answerContainers.length; i++)
        {
            //Get the current answer container we're looking at for the loop
            var answerContainer = answerContainers[i];

            var selector = `input[name=question${i}]:checked`;

            //Try to find the selected answer in the container and print out the value
            var userAnswer = 
            (answerContainer.querySelector(selector)|| {}).value;
            console.log(userAnswer); //If it can't find a selected input for a question, querySelector will give back null. If it does, use an empty object instead, since {}.value gives back undefined instead of null.

            if(userAnswer === myQuestions[i].correctAnswer) {
                  //They got it right!
                  // Add 1 to numCorrect
                  numCorrect++;
                  answerContainer.style.color = "green";
            } else { 
                //They got it wrong!
                //Change the text color to red
                answerContainer.style.color = "red";
            }
            }

            //Add text to the results container to see how many they got right
            resultsContainer.innerText = "You got " +  numCorrect + " out of " + myQuestions.length;
        }
    

    submitButton.addEventListener("click", showResults);
    
    //Function to reset the quiz
    function resetQuiz(){
        //Clear out what's in results container
         resultsContainer.innerText = "";
        //Clear out quiz container
        quizContainer.innerHTML = "";
        //Rebuild quiz
        buildQuiz();

    }
    //Call the resetQuiz function when the reset button is clicked
    resetButton.addEventListener("click", resetQuiz);
