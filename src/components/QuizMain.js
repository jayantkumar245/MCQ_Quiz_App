import { Component } from "react";
import Question from "./Question/Question";
import Answer from "./Answer/Answer";
import ProgressBars from "./ProgressBar/ProgressBars";
import "./QuizMain.css";

export default class Quiz extends Component {
  state = {
    percentages: {
      1: "5",
      2: "10",
      3: "15",
      4: "20",
      5: "25",
      6: "30",
      7: "35",
      8: "40",
      9: "45",
      10: "50",
      11: "55",
      12: "60",
      13: "65",
      14: "70",
      15: "75",
      16: "80",
      17: "85",
      18: "90",
      19: "95",
      20: "100"
    },
    numbers: {
      1: "Question 01 of 20",
      2: "Question 02 of 20",
      3: "Question 03 of 20",
      4: "Question 04 of 20",
      5: "Question 05 of 20",
      6: "Question 06 of 20",
      7: "Question 07 of 20",
      8: "Question 08 of 20",
      9: "Question 09 of 20",
      10: "Question 10 of 20",
      11: "Question 11 of 20",
      12: "Question 12 of 20",
      13: "Question 13 of 20",
      14: "Question 14 of 20",
      15: "Question 15 of 20",
      16: "Question 16 of 20",
      17: "Question 17 of 20",
      18: "Question 18 of 20",
      19: "Question 19 of 20",
      20: "Question 20 of 20"
    },
    difficultys: {
      1: "★★☆",
      2: "★☆☆",
      3: "★★★",
      4: "★☆☆",
      5: "★★★",
      6: "★☆☆",
      7: "★★☆",
      8: "★★★",
      9: "★☆☆",
      10: "★★☆",
      11: "★★★",
      12: "★☆☆",
      13: "★★★",
      14: "★★☆",
      15: "★☆☆",
      16: "★★☆",
      17: "★☆☆",
      18: "★★★",
      19: "★★☆",
      20: "★★★"
    },
    questions: {
      1: "MS-Word is an example of ?",
      2: "Which of the following is a popular programming language for developing multimedia webpages ?",
      3: "Which of the following software applications would be the most appropriate for performing numerical and statistical calculations ?",
      4: "In React what is used to pass data to a component from outside ?",
      5: "At the highest level, React components have lifecycle events that fall into ?",
      6: "How many elements does a react component return ?",
      7: "What function can be used to update state ?",
      8: "What is the DOM ?",
      9: "Variabel default React JS are ?",
      10: "There are two types of components in React ?",
      11: "React.Js was created by ?",
      12: "Which concept includes OOPs ?",
      13: "What is React.Js used for ?",
      14: "What function allows you to render React content in an HTML page ?",
      15: "What is JSX ?",
      16: "Who is the father of React.js ?",
      17: "What is babel in react ?",
      18: "React supports all the syntax of ?",
      19: "React is mainly for building ?",
      20: "In which directory react components are saved ?"
    },
    answers: {
      1: {
        1: "An operating system",
        2: "A processing device",
        3: "Application software",
        4: "An input device"
      },
      2: {
        1: "COBOL",
        2: "Java",
        3: "BASIC",
        4: "Assembler"
      },
      3: {
        1: "Database",
        2: "Document Processor",
        3: "Graphic Package",
        4: "Spread Sheet"
      },
      4: {
        1: "setState",
        2: "render arguments",
        3: "props",
        4: "PropTypes"
      },
      5: {
        1: "Initialization",
        2: "State Updates",
        3: "Destruction",
        4: "All of these"
      },
      6: {
        1: "2 Elements",
        2: "1 Element",
        3: "Multiple Elements",
        4: "None of These"
      },
      7: {
        1: "setState()",
        2: "updateState()",
        3: "upState()",
        4: "downState()"
      },
      8: {
        1: "Document Object Model",
        2: "Data Object Model",
        3: "Data Option Model",
        4: "Object Model"
      },
      9: {
        1: "Props",
        2: "Statefull",
        3: "Stateless",
        4: "State"
      },
      10: {
        1: "UseState, Stateless",
        2: "Statefull, Stateless",
        3: "Unstatefull Statefull",
        4: "None of these"
      },
      11: {
        1: "Google",
        2: "Microsoft",
        3: "Facebook",
        4: "All of above"
      },
      12: {
        1: "Functional",
        2: "Class",
        3: "Oriented",
        4: "None of these"
      },
      13: {
        1: "Server-Side",
        2: "For Both",
        3: "Client-Side",
        4: "None of these"
      },
      14: {
        1: "React.mount()",
        2: "ReactDOM.start()",
        3: "ReactDOM.render()",
        4: "React.render()"
      },
      15: {
        1: "extension JavaScript",
        2: "JSX data",
        3: "control the data",
        4: "none of above"
      },
      16: {
        1: "Jordan mike",
        2: "Nile",
        3: "Jordan Walke",
        4: "Nike John"
      },
      17: {
        1: "Compiler",
        2: "Transpiler",
        3: "Interpreter",
        4: "Compiler&Transpiler"
      },
      18: {
        1: "ES6",
        2: "Redux",
        3: "Native Java",
        4: "None of above"
      },
      19: {
        1: "Database",
        2: "Connectivity",
        3: "Design platform",
        4: "User interface"
      },
      20: {
        1: "vendor/",
        2: "js/components/",
        3: "vendor/components/",
        4: "external/components/"
      }
    },
    correctAnswers: {
      1: "3",
      2: "2",
      3: "4",
      4: "3",
      5: "4",
      6: "2",
      7: "1",
      8: "1",
      9: "4",
      10: "2",
      11: "3",
      12: "2",
      13: "3",
      14: "4",
      15: "1",
      16: "3",
      17: "4",
      18: "1",
      19: "4",
      20: "2"
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0
  };

  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer
      });
    }
  };

  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0
    });
  };

  render() {
    let {
      numbers,
      questions,
      answers,
      correctAnswer,
      clickedAnswer,
      step,
      difficultys,
      percentages,
      score
    } = this.state;
    return (
      <div className="Content">
        {step <= Object.keys(questions).length ? (
          <>
            <ProgressBars percentage={percentages[step]} />
            <Question
              question={questions[step]}
              number={numbers[step]}
              difficult={difficultys[step]}
            />
            <Answer
              answer={answers[step]}
              step={step}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            <div className="Btn">
              <button
                className="NextStep"
                disabled={
                  clickedAnswer && Object.keys(questions).length >= step
                    ? false
                    : true
                }
                onClick={() => this.nextStep(step)}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="finalPage">
            <h1>You have completed the quiz!</h1>
            <p>
              Your score is: {score} of {Object.keys(questions).length}
            </p>
            <p>Thank you!</p>
          </div>
        )}
      </div>
    );
  }
}
