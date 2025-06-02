const submitForm = function submitFormUserInput() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function handleSubmit(event) {
    event.preventDefault();

    if (!checkField(form.elements.fname.value, "name")) return;
    if (!checkField(form.elements.uname.value, "username")) return;
    if (!checkField(form.elements.email.value, "email")) return;
    if (!checkField(form.elements.password.value, "password")) return;

    console.log("Name: " + form.elements.fname.value);
    console.log("Username: " + form.elements.uname.value);
    console.log("Email: " + form.elements.email.value);
    console.log("Password: " + form.elements.password.value);
    console.log("Date: " + form.elements.date.value);
    console.log("Prefered Pronouns: " + form.elements.section.value);
  });
};

submitForm();
