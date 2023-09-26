//PHONE CHECKER

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "OK";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = "NOT OK";
    phoneResult.style.color = "red";
  }
};

// TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabsParentBlock = document.querySelector(".tab_content_items");
const tabsBlocks = document.querySelectorAll(".tab_content_item");

const hideTabContent = () => {
  tabContentBlocks.forEach((tabContentBlock) => {
    tabContentBlock.style.display = "none";
  });
  tabsBlocks.forEach((tabBlock) => {
    tabBlock.classList.remove("tab_content_item_active");
  });
};
hideTabContent();

const showTabContent = (indexElement = 0) => {
  tabContentBlocks[indexElement].style.display = "block";
  tabsBlocks[indexElement].classList.add("tab_content_item_active");
};
showTabContent();

let currentIndex = 0;
const autoSlide = () => {
  hideTabContent();
  showTabContent(currentIndex);
  currentIndex++;
  if (currentIndex >= tabsBlocks.length) {
    currentIndex = 0;
  }
  setTimeout(autoSlide, 3000);
};

tabsParentBlock.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabsBlocks.forEach((tabBlock, tabIndex) => {
      if (event.target === tabBlock) {
        hideTabContent();
        showTabContent(tabIndex);
        currentIndex = tabIndex;
      }
    });
  }
};

autoSlide();

//CONVERTER
const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

const converter = (element, target1, target2, currency) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.onload = () => {
      const response = JSON.parse(request.response);
      if (currency === "som") {
        target1.value = (element.value / response.usd).toFixed(2);
        target2.value = (element.value / response.eur).toFixed(2);
      } else if (currency === "usd") {
        target1.value = (element.value * response.usd).toFixed(2);
        target2.value = "";
      } else if (currency === "eur") {
        target1.value = (element.value * response.eur).toFixed(2);
        target2.value = "";
      }
      element.value === "" && (target1.value = target2.value = "");
    };
  };
};
converter(som, usd, eur, "som");
converter(usd, som, eur, "usd");
converter(eur, som, usd, "eur");

//Card switcher

const card = document.querySelector(".card");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");

let count = 198;

const cardInfo = () => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then((response) => response.json())
    .then((data) => {
      card.innerHTML = `
    <p>${data.title}</p>
    <p style="color:${data.completed ? "green" : "red"}">${data.completed}</p>
    <span>${data.id}</span>
    `;
    });
};
cardInfo();

btnNext.onclick = () => {
  if (count >= 200) {
    count = 1;
  } else {
    count++;
  }
  cardInfo();
};

btnPrev.onclick = () => {
  if (count < 1) {
    count--;
  }
  cardInfo();
};

//Card switcher Homework 2

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
