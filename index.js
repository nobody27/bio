// form section
const submitForm = function submitFormUserInput() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function handleSubmit(event) {
    // event.preventDefault();

    console.log("Name: " + form.elements.fname.value);
    console.log("Email: " + form.elements.email.value);
    console.log("Subject: " + form.elements.subject.value);
    console.log("Message: " + form.elements.message.value);
    console.log("Found via: " + form.elements.section.value);
  });
};

// submit
submitForm();
