// Name field focus
const nameField = document.getElementById("name");
nameField.focus();
// Job role section
const otherJobRole = document.getElementById("other-job-role");
otherJobRole.style.display = "none";
const jobRole = document.getElementById("title");
jobRole.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});

// T-shirt section
const color = document.getElementById("color");
const design = document.getElementById("design");
const colorOptions = color.children;
color.disabled = true;

design.addEventListener("change", (e) => {
  color.disabled = false;
  for (let i = 0; i < colorOptions.length; i++) {
    const option = colorOptions[i];
    const dataTheme = option.getAttribute("data-theme");
    if (e.target.value === dataTheme) {
      option.hidden = false;
      option.selected = true;
    } else {
      option.hidden = true;
      option.selected = false;
    }
  }
});
