'use strict';

// element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
}

// filter variables for portfolio - FIXED
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");
const select = document.querySelector("[data-select]");
const selectValue = document.querySelector("[data-selecct-value]");
const selectItems = document.querySelectorAll("[data-select-item]");

// filter function
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event to filter buttons
if (filterButtons.length > 0) {
  let lastClickedBtn = filterButtons[0];
  
  for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      
      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}

// custom select functionality
if (select) {
  select.addEventListener("click", function () { 
    elementToggleFunc(this); 
  });
}

if (selectItems.length > 0) {
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }
}

// contact form variables - FIXED
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
if (formInputs.length > 0 && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form && form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else if (formBtn) {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

// page navigation variables - FIXED
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
if (navigationLinks.length > 0 && pages.length > 0) {
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      const clickedPage = this.innerHTML.toLowerCase();
      
      for (let j = 0; j < pages.length; j++) {
        if (clickedPage === pages[j].dataset.page) {
          pages[j].classList.add("active");
          navigationLinks[j].classList.add("active");
        } else {
          pages[j].classList.remove("active");
          navigationLinks[j].classList.remove("active");
        }
      }
      window.scrollTo(0, 0);
    });
  }
}