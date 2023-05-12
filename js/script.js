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

// Register for activities section
const activities = document.getElementById("activities");
const activitiesCost = document.getElementById("activities-cost");
let totalCost = 0;
activities.addEventListener("change", (e) => {
  const dataCost = parseInt(e.target.getAttribute("data-cost"));
  if (e.target.checked) {
    totalCost += dataCost;
  } else {
    totalCost -= dataCost;
  }
  activitiesCost.innerHTML = `Total: $${totalCost}`;
});

// Payment section
const payment = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
paypal.style.display = "none";
bitcoin.style.display = "none";
payment.children[1].selected = true;

payment.addEventListener("change", (e) => {
  if (e.target.value === "credit-card") {
    creditCard.style.display = "block";
    paypal.style.display = "none";
    bitcoin.style.display = "none";
  } else if (e.target.value === "paypal") {
    creditCard.style.display = "none";
    paypal.style.display = "block";
    bitcoin.style.display = "none";
  } else if (e.target.value === "bitcoin") {
    creditCard.style.display = "none";
    paypal.style.display = "none";
    bitcoin.style.display = "block";
  }
});
