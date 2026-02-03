



(function () {
  "use strict";

  const forms = document.querySelectorAll(".php-email-form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const subject = form.querySelector('[name="subject"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();
      const errorBox = form.querySelector(".error-message");

      errorBox.innerHTML = "";
      errorBox.classList.remove("d-block");

      // ✅ NAME — ONLY LETTERS & SPACES
      const nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
      if (!nameRegex.test(name)) {
        return showError("Name must contain ONLY letters (no numbers or symbols)");
      }

      // ✅ EMAIL
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return showError("Please enter a valid email address");
      }

      // ✅ SUBJECT
      if (subject.length < 5 || subject.length > 50) {
        return showError("Subject must be between 5 and 50 characters");
      }

      // ✅ MESSAGE
      if (message.length < 15) {
        return showError("Message must be at least 15 characters long");
      }

      // ✅ ALL VALID → SUBMIT
      form.submit();

      function showError(msg) {
        errorBox.innerHTML = msg;
        errorBox.classList.add("d-block");
      }
    });
  });
})();
