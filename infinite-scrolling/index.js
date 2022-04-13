const template = document.querySelector("[scrolling-template]");
const container = document.querySelector("[infinite-scrolling-container]");

let data = [],
  pageNumber = 1;

const getData = async function () {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=25`
  );
  const results = await response.json();
  data = [...new Set([...results])];

  data.forEach((item, index) => {
    const card = template.content.cloneNode(true).children[0];
    const id = card.querySelector("[data-id]");
    const name = card.querySelector("[data-name]");
    const email = card.querySelector("[data-email]");

    id.textContent = item.id;
    name.textContent = item.name;
    email.textContent = item.email;

    container.children[0].append(card);
  });
};
getData();

const defaultText = document.querySelector(".default");
const debounceText = document.querySelector(".debounce");
const throttleText = document.querySelector(".throttle");
window.addEventListener("scroll", (e) => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  incrementCount(defaultText); // default behaviour of scrolling
  updateDebounceText(); // debounce behaviour of scrolling
  updateThrottleText(scrollTop, scrollHeight, clientHeight); // throttle behaviour of scrolling
});

// Debounce of scrolling
const updateDebounceText = debounce(() => incrementCount(debounceText));
function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// Throttle of scrolling
const updateThrottleText = throttle(() => incrementCount(throttleText));
function throttle(cb, wait = 1000) {
  let lastCall = 0,
    timeout;

  return (...args) => {
    clearTimeout(timeout);
    if (Date.now() - lastCall > wait) {
      const [scrollTop, scrollHeight, clientHeight] = args;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        timeout = setTimeout(() => {
          cb(...args);
          pageNumber++;
          getData();
        }, wait);
      }
    }
  };
}

// To see how many times function are called
function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
