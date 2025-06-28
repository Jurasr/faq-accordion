const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const active = Array.from(toggle.classList).includes("active");
    const answer = toggle.parentNode.parentNode.querySelector(".answer");
    console.log(active, answer);
    if (active) {
      toggle.src = "./assets/images/icon-plus.svg";
      toggle.classList.remove("active");
      answer.classList.remove("active");
    } else {
      toggle.src = "./assets/images/icon-minus.svg";
      toggle.classList.add("active");
      answer.classList.add("active");
    }
  });
});
