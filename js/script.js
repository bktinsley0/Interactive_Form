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
// Accessibility
const checkboxes = document.querySelectorAll("#activities input");
for (let i = 0; i < checkboxes.length; i++) {
  const checkbox = checkboxes[i];
  checkbox.addEventListener("focus", (e) => {
    checkbox.parentElement.classList.add("focus");
  });
  checkbox.addEventListener("blur", (e) => {
    checkbox.parentElement.classList.remove("focus");
  });
}

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

// Form validation section
const form = document.querySelector("form");
const email = document.getElementById("email");
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");

// Helper functions
const isValidName = (name) => {
  return /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(name);
};

const isValidEmail = (email) => {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
};

const isValidCardNumber = (cardNumber) => {
  return /^\d{13,16}$/.test(cardNumber);
};

const isValidZipCode = (zipCode) => {
  return /^\d{5}$/.test(zipCode);
};

const isValidCvv = (cvv) => {
  return /^\d{3}$/.test(cvv);
};

const isValidActivities = () => {
  const activities = document.querySelectorAll("#activities input");
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].checked) {
      return true;
    }
  }
  return false;
};

const isValidPayment = () => {
  const payment = document.getElementById("payment");
  if (payment.value === "credit-card") {
    return (
      isValidCardNumber(cardNumber.value) &&
      isValidZipCode(zipCode.value) &&
      isValidCvv(cvv.value)
    );
  } else {
    return true;
  }
};

// Form Registration check
form.addEventListener("submit", (e) => {
  if (!isValidName(nameField.value)) {
    e.preventDefault();
    nameField.parentElement.classList.add("not-valid");
    nameField.parentElement.classList.remove("valid");
    nameField.parentElement.lastElementChild.style.display = "block";
  } else {
    nameField.parentElement.classList.add("valid");
    nameField.parentElement.classList.remove("not-valid");
    nameField.parentElement.lastElementChild.style.display = "none";
  }

  if (!isValidEmail(email.value)) {
    e.preventDefault();
    email.parentElement.classList.add("not-valid");
    email.parentElement.classList.remove("valid");
    email.parentElement.lastElementChild.style.display = "block";
  } else {
    email.parentElement.classList.add("valid");
    email.parentElement.classList.remove("not-valid");
    email.parentElement.lastElementChild.style.display = "none";
  }

  if (!isValidActivities()) {
    e.preventDefault();
    activities.classList.add("not-valid");
    activities.classList.remove("valid");
    activities.lastElementChild.style.display = "block";
  } else {
    activities.classList.add("valid");
    activities.classList.remove("not-valid");
    activities.lastElementChild.style.display = "none";
  }

  if (!isValidPayment()) {
    e.preventDefault();
    payment.parentElement.classList.add("not-valid");
    payment.parentElement.classList.remove("valid");
    payment.parentElement.lastElementChild.style.display = "block";
  } else {
    payment.parentElement.classList.add("valid");
    payment.parentElement.classList.remove("not-valid");
    payment.parentElement.lastElementChild.style.display = "none";
  }
});
