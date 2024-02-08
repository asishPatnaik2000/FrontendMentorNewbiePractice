let previouslySelectedButton = null;

document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll(".rating");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function (event) {
      changeRating(event);
    });
  }
  document.getElementById("submit").addEventListener("click", () => {
    showThankyouTab(event);
  });
});

const changeRating = (event) => {
  if (
    !previouslySelectedButton ||
    (previouslySelectedButton && previouslySelectedButton != event.target.id)
  ) {
    if (previouslySelectedButton) {
      document
        .getElementById(previouslySelectedButton)
        .classList.remove("buttonSelected");
    }
    const selectedButton = document.getElementById(event.target.id);
    selectedButton.classList.add("buttonSelected");
    previouslySelectedButton = event.target.id;
  }
};

const showThankyouTab = (event) => {
  if (previouslySelectedButton) {
    //hiding main rating container
    document.getElementById("giveRatingContainer").classList.add("hiddenClass");

    //getCurrentRating
    let currentRating = previouslySelectedButton.slice(-1);

    //adding user selected rating in final tab
    document.getElementById(
      "selectedRatings"
    ).textContent = `You selected ${currentRating} out of 5`;

    //showing final rating component
    document
      .getElementById("finalRatingScreen")
      .classList.remove("hiddenClass");
  }
};
