const toggles = document.querySelectorAll(".toggle");
let activeToggle = toggles[0];

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const faq = toggle.parentElement.parentElement;
    const active = Array.from(faq.classList).includes("active");
    if (active) {
      faq.classList.remove("active");
      toggle.src = "./assets/images/icon-plus.svg";
    } else {
      faq.classList.add("active");
      toggle.src = "./assets/images/icon-minus.svg";
      if (toggle !== activeToggle) {
        activeToggle.parentElement.parentElement.classList.remove("active");
        activeToggle.src = "./assets/images/icon-plus.svg";
        activeToggle = toggle;
      }
    }
  });
});
