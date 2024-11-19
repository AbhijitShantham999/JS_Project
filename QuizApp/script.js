const quizs = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "Charles Dickens",
        "J.K. Rowling",
        "William Shakespeare",
        "Ernest Hemingway",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the boiling point of water at sea level?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      correctAnswer: "100°C",
    },
  ];
  
  const mainCtn = document.querySelector(".main");
  const main_h1 = document.querySelector("h1");
  const quizSec = document.querySelector(".quiz_sec");
  const startBtn = document.createElement("button");
  
  startBtn.textContent = "Start";
  mainCtn.appendChild(startBtn);
  
  let index = 0;
  let score = 0;
  let answerSelected = false;
  
  /**
   * Removes the score status message if it exists.
   */
  function removeStatus() {
    const existingStatus = document.querySelector(".score_status");
    if (existingStatus) existingStatus.remove();
  }
  
  /**
   * Renders the current question and its options.
   */
  function renderQuestion() {
    // Clear the quiz section
    quizSec.innerHTML = "";
    answerSelected = false;
  
    // Display the question
    const ques = document.createElement("div");
    ques.classList = "ques-div";
    ques.innerHTML = `<p>${index + 1}. ${quizs[index].question}</p>`;
    quizSec.appendChild(ques);
  
    // Display the answer options
    const ans = document.createElement("div");
    ans.classList = "ans-div";
  
    quizs[index].options.forEach((option, optIndex) => {
      const p = document.createElement("p");
      p.textContent = `${optIndex + 1}. ${option}`;
      ans.appendChild(p);
  
      // Add click listener for options
      p.addEventListener("click", function () {
        if (!answerSelected) {
          answerSelected = true;
          if (quizs[index].correctAnswer === option) {
            p.style.backgroundColor = "lightgreen";
            score++;
          } else {
            p.style.backgroundColor = "orangered";
          }
        }
      });
    });
  
    quizSec.appendChild(ans);
    main_h1.textContent = `Question ${index + 1}`;
    startBtn.textContent = "Next";
  }
  
  /**
   * Displays the final score and resets the quiz.
   */
  function displayScoreAndReset() {
    // Show the score
    const status = document.createElement("h2");
    status.classList = "score_status";
    status.innerHTML = `Your Score is ${score}/${quizs.length}`;
  
    main_h1.textContent = "Finished Your Quiz. Wanna Restart?";
    mainCtn.appendChild(status);
  
    // Reset variables
    startBtn.textContent = "Restart";
    index = 0;
    score = 0;
  }
  
  /**
   * Handles the click event of the Start/Next button.
   */
  function handleButtonClick() {
    removeStatus();
  
    if (index < quizs.length) {
      if (!answerSelected && index > 0) {
        alert("Please select an answer before proceeding.");
        return;
      }
      renderQuestion();
      index++;
    } else {
      displayScoreAndReset();
    }
  }
  
  // Attach the event listener to the button
  startBtn.addEventListener("click", handleButtonClick);
  