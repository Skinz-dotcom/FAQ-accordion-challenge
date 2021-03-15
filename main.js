// ! logic for accordion

// select all the buttons as a Node list and set as a Variable.

let accordionBtn = document.querySelectorAll(".accordian_btn");

// ? add a for each loop that applied an event listener to the accordian buttons.
// The click triggers an if/else statement.
// ! if the parentNode (accordian_item div) has a class of active, then toggle the class active. This allows us to click the same question to open and close.
// else run another forEach loop but this time over the accordian_item div and remove the active class. This closes all the accordian_panels if any are open.
// ? then add the class active to the accordian_item clicked to open the panel.
// This lets us open only one answer planel at a time, resetting anything previously opened, but also allows us to open and close the same answer panel by clicking it again.

accordionBtn.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      accordionBtn.forEach((question) =>
        question.parentNode.classList.remove("active")
      );
      question.parentNode.classList.add("active");
    }
  });
});
