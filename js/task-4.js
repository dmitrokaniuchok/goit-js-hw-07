const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = {};
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  Array.from(form.elements).forEach((element) => {
    if (element.name) {
      formData[element.name] = element.value.trim();
    }
  });

  console.log(formData);

  loginForm.reset();
});
