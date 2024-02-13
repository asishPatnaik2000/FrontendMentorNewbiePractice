const submitForm = (eventValue) => {
  eventValue.preventDefault();
  const inputBox = document.getElementById("inputBox");
  const checkValue = inputBox.value ? inputBox.value.trim() : null;
  if (!checkValue || !checkValue.length) {
    handleErrorClass();
  } else {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(checkValue)) {
      handleErrorClass();
    } else {
      removeErrorClass();
      document.getElementById("registerForm").reset();
    }
  }
};

const handleErrorClass = () => {
  document.getElementById("inputBox").classList.add("errorInput");
  document.querySelector(".errorClass").classList.remove("hiddenClass");
  document.querySelector(".notifyClass").classList.add("errorButton");
};

const removeErrorClass = () => {
  document.getElementById("inputBox").classList.remove("errorInput");
  document.querySelector(".errorClass").classList.add("hiddenClass");
  document.querySelector(".notifyClass").classList.remove("errorButton");
};
