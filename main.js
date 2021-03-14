// logic for accordion

let acc = document.querySelectorAll("button");
let panel = document.querySelectorAll(".accordian_panel");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    document.querySelectorAll(".accordian_panel.show").forEach((element) => {
      if (element !== panel) {
        element.classList.remove("show");
        element.classList.add("hidden");
      }
    });

    document.querySelectorAll(".accordian_btn").forEach((element) => {
      if (element !== acc) {
        element.classList.remove("active");
        //   element.classList.add("hidden");
      }
    });

    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("hidden");
    this.nextElementSibling.classList.toggle("show");

    // let panel = this.nextElementSibling;
    // if (panel.style.display === "block") {
    //   panel.style.display = "none";
    // } else {
    //   panel.style.display = "block";
    // }
  });
}
