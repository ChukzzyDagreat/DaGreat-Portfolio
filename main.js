//Side nav show and hide code
const openMenu = document.querySelector(".menu");
const closemenu = document.querySelector(".closeMenu");
const Nav = document.querySelector(".side_nav");

openMenu.addEventListener("click", () => {
  Nav.style.height = "fit-content";
});

closemenu.addEventListener("click", () => {
  Nav.style.height = "0";
});
Nav.addEventListener("click", () => {
  Nav.style.height = "0";
});

// MY photo shrinking to fit the header| scroll effect
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const me = document.querySelector(".avatar_con");
  const me2 = document.querySelector(".tab_avatar_con");
  const toTop = document.querySelector(".to_top");

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    me.style.position = "fixed";
    me.style.width = "53px";
    me.style.height = "53px";
    me.style.top = ".6em";
    me.style.bottom = "unset";
    toTop.style.opacity = "1";

    me2.style.width = "64px";
    me2.style.position = "fixed";
    me2.style.top = "2.5em";
    me2.style.zIndex = "100";
  } else {
    me.style.position = "relative";
    me.style.width = "200px";
    me.style.height = "200px";
    me.style.top = "-2em";

    me2.style.width = "60%";
    me2.style.position = "relative";
    me2.style.marginTop = "-2em";
    me2.style.top = "unset";
    me2.style.zIndex = "1";
    toTop.style.opacity = "0";
  }
}

//about section reveal code
const about = document.querySelector(".about .container");
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      about.classList.add("visible");
    } else {
      about.classList.remove("visible");
    }
  },
  {
    threshold: 0.2,
  }
);
observer.observe(about);

//experience section reveal code
const experience = document.querySelector(".experience .container");

const observer2 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      experience.classList.add("visible");
    } else {
      experience.classList.remove("visible");
    }
  },
  {
    threshold: 0.2,
  }
);
observer2.observe(experience);

//Project section reveal code
const project = document.querySelector(".projects .container");
const observer3 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      project.classList.add("visible");
    } else {
      project.classList.remove("visible");
    }
  },
  {
    threshold: 0.2,
  }
);
observer3.observe(project);

//tools section reveal code
const tools = document.querySelector(".tools .list");
const observer4 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      tools.classList.add("visible");
    } else {
      tools.classList.remove("visible");
    }
  },
  {
    threshold: 0.2,
  }
);
observer4.observe(tools);

//tools section reveal code
const review = document.querySelector(".review .container");
const observer5 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      review.classList.add("visible");
    } else {
      review.classList.remove("visible");
    }
  },
  {
    threshold: 0.2,
  }
);
observer5.observe(review);

//tools section reveal code
const contact = document.querySelector(".contact .form");
const observer6 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      contact.classList.add("visible");
    } else {
      contact.classList.remove("visible");
    }
  },
  {
    threshold: 0.2,
  }
);
observer6.observe(contact);

// form validation code
// js/contact.js
const hireMeBg = document.querySelector(".hire_me_bg");
const openHireMe = document.querySelector(".hire_me");
const closeHireMe = document.querySelector(".close");

openHireMe.addEventListener("click", () => {
  hireMeBg.style.display = "block";
});

closeHireMe.addEventListener("click", () => {
  hireMeBg.style.display = "none";
});

//contact me / hire me form validation code
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const fields = {
    fullName: document.getElementById("fullName"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message"),
  };
  const errors = {
    fullName: document.getElementById("error-fullName"),
    fullName: document.querySelector(".error-fullName"),
    email: document.getElementById("error-email"),
    email: document.querySelector(".error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
    message: document.querySelector(".error-message"),
  };
  const success = document.getElementById("formSuccess");
  const sender = document.getElementById("senderName");

  function resetErrors() {
    Object.values(errors).forEach((el) => {
      el.textContent = "";
      el.hidden = true;
    });
    success.hidden = true;
  }

  function validateEmail(value) {
    // simple email regex (reasonable for client-side)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validate() {
    let valid = true;
    resetErrors();

    if (!fields.fullName.value.trim()) {
      errors.fullName.textContent = "Full name is required.";
      errors.fullName.hidden = false;
      valid = false;
    }

    if (!fields.email.value.trim()) {
      errors.email.textContent = "Email is required.";
      errors.email.hidden = false;
      valid = false;
    } else if (!validateEmail(fields.email.value.trim())) {
      errors.email.textContent =
        "Please enter a valid email (name@example.com).";
      errors.email.hidden = false;
      valid = false;
    }

    if (!fields.subject.value.trim()) {
      errors.subject.textContent = "Subject is required.";
      errors.subject.hidden = false;
      valid = false;
    }

    if (!fields.message.value.trim()) {
      errors.message.textContent = "Message is required.";
      errors.message.hidden = false;
      valid = false;
    } else if (fields.message.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters.";
      errors.message.hidden = false;
      valid = false;
    }

    return valid;
  }

  // show errors live on blur
  Object.values(fields).forEach((field) => {
    field.addEventListener("blur", () => {
      validate();
    });
  });

  // form submit handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validate()) {
      success.hidden = false;
      form.reset();
      success.focus && success.focus();
      //sender name display
      sender.textContent.return(fullName);
    } else {
      // focus first invalid element
      const firstError = Object.keys(errors).find((k) => !errors[k].hidden);
      if (firstError) {
        fields[firstError].focus();
      }
    }
  });

  success.tabIndex = -1;
  resetErrors();
});
const successOk = document.querySelector(".success_ok");
const success = document.getElementById("formSuccess");

successOk.addEventListener("click", () => {
  success.hidden = true;
});
success.addEventListener("click", () => {
  success.hidden = true;
});
