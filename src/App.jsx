import React, { useEffect, useState } from 'react'
import Heading from './components/Heading';
import Progressbar from './components/Progressbar';
import Congratulations from './pages/Congratulations';
import CreateWorkspace from './pages/CreateWorkspace';
import Planning from './pages/Planning';
import WelcomeForm from './pages/WelcomeForm';

const App = () => {
  const [formStepsNum, setformStepsNum] = useState(1)
  useEffect(() => {
    const nextBtns = document.querySelectorAll(".btn-next");
    const progress = document.getElementById("progress");
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");

    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        setformStepsNum(formStepsNum + 1 );
        updateFormSteps();
        updateProgressbar();
      });
    });

    function updateFormSteps() {
      formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
          formStep.classList.remove("form-step-active");
      });

      formSteps[formStepsNum].classList.add("form-step-active");
    }

    function updateProgressbar() {
      progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
          progressStep.classList.add("progress-step-active");
        } else {
          progressStep.classList.remove("progress-step-active");
        }
      });

      const progressActive = document.querySelectorAll(".progress-step-active");

      progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
    }
  }, [formStepsNum])
  return (
    <form action="#">
      <Heading />
      <Progressbar />
      <WelcomeForm />
      <CreateWorkspace />
      <Planning />
      <Congratulations />
    </form>
  )
}

export default App