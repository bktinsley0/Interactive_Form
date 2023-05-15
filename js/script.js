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
  checkbox.addEventListener("focus", () => {
    checkbox.parentElement.classList.add("focus");
  });
  checkbox.addEventListener("blur", () => {
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

// Helper functions
const passedValidation = (element) => {
  element.parentElement.classList.add("valid");
  element.parentElement.classList.remove("not-valid");
  element.parentElement.lastElementChild.style.display = "none";
};
const failedValidation = (element) => {
  element.parentElement.classList.add("not-valid");
  element.parentElement.classList.remove("valid");
  element.parentElement.lastElementChild.style.display = "block";
};
// name field validation
const isValidName = (name) => {
  console.log(name);
  return /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(name);
};
const nameHint = document.getElementById("name-hint");

nameField.addEventListener("keyup", (e) => {
  if (!isValidName(e.target.value)) {
    nameHint.style.display = "block";
    failedValidation(nameField);
  } else {
    nameHint.style.display = "none";
    passedValidation(nameField);
  }
});

// email field validation
const isValidEmail = (email) => {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
};
const emailInput = document.getElementById("email");
const emailHint = document.getElementById("email-hint");
emailInput.addEventListener("keyup", (e) => {
  if (!isValidEmail(e.target.value)) {
    emailHint.style.display = "block";
    failedValidation(emailInput);
  } else {
    emailHint.style.display = "none";
    passedValidation(emailInput);
  }
});
// Activities validation
const isValidActivities = () => {
  const activities = document.querySelectorAll("#activities input");
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].checked) {
      return true;
    }
  }
  return false;
};
// payment validation
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const ccHint = document.getElementById("cc-hint");
const zipHint = document.getElementById("zip-hint");
const cvvHint = document.getElementById("cvv-hint");

const isValidCardNumber = (cardNumber) => {
  return /^\d{13,16}$/.test(cardNumber);
};

const isValidZipCode = (zipCode) => {
  return /^\d{5}$/.test(zipCode);
};

const isValidCvv = (cvv) => {
  return /^\d{3}$/.test(cvv);
};

// Form Registration check
form.addEventListener("submit", (e) => {
  if (!isValidName(nameField.value)) {
    e.preventDefault();
    failedValidation(nameField);
  } else {
    passedValidation(nameField);
  }

  if (!isValidEmail(email.value)) {
    e.preventDefault();
    failedValidation(email);
  } else {
    passedValidation(email);
  }

  if (!isValidActivities()) {
    e.preventDefault();
    failedValidation(activities);
  } else {
    passedValidation(activities);
  }

  if (payment.value === "credit-card") {
    e.preventDefault();

    if (!isValidCardNumber(cardNumber.value)) {
      ccHint.style.display = "block";
      failedValidation(cardNumber);
    } else {
      passedValidation(cardNumber);
    }
    if (!isValidZipCode(zipCode.value)) {
      zipHint.style.display = "block";
      failedValidation(zipCode);
    } else {
      passedValidation(zipCode);
    }
    if (!isValidCvv(cvv.value)) {
      cvvHint.style.display = "block";
      failedValidation(cvv);
    } else {
      passedValidation(cvv);
    }
  } else {
    passedValidation(payment);
  }
});
