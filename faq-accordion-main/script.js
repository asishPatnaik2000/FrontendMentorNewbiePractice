let previouslySelectedQyestion;

document.addEventListener("DOMContentLoaded", () => {
  let questionsList = document.querySelectorAll(".questionClass");
  questionsList.forEach((question) => {
    question.addEventListener("click", (event) => {
      handleClickEvent(event);
    });
    console.log(question);
  });
});

const handleClickEvent = (event) => {
  console.log("event", event.currentTarget.id);
  //   When a section is clicked, the event bubbles up from the target element (the deepest element where the click occurred) up to the document root.
  const selectedQuestion = document.getElementById(event.currentTarget.id);
  const answerBox = selectedQuestion.querySelector(".answerClass");
  const plusIcon = selectedQuestion.querySelector(".openIcon");
  const minusIcon = selectedQuestion.querySelector(".closeIcon");
  console.log("answerbox", answerBox.classList);
  if (answerBox.classList.contains("hiddenClass")) {
    answerBox.classList.remove("hiddenClass");
    minusIcon.classList.remove("hiddenClass");
    plusIcon.classList.add("hiddenClass");
  }
  if (
    previouslySelectedQyestion &&
    previouslySelectedQyestion !== event.currentTarget.id
  ) {
    const previouslySelectedQyestionBox = document.getElementById(
      previouslySelectedQyestion
    );
    const answerBox =
      previouslySelectedQyestionBox.querySelector(".answerClass");
    const plusIcon = previouslySelectedQyestionBox.querySelector(".openIcon");
    const minusIcon = previouslySelectedQyestionBox.querySelector(".closeIcon");
    answerBox.classList.add("hiddenClass");
    minusIcon.classList.add("hiddenClass");
    plusIcon.classList.remove("hiddenClass");
  }
  previouslySelectedQyestion = event.currentTarget.id;
};
