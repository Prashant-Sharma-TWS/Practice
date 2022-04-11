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
window.addEventListener("scroll", (e) => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  incrementCount(defaultText); // default behaviour of scrolling
  updateDebounceText(scrollTop, scrollHeight, clientHeight);
});

// Debounce of scrolling
const updateDebounceText = debounce((scrollTop, scrollHeight, clientHeight) =>
  incrementCount(debounceText)
);
function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);

      const [scrollTop, scrollHeight, clientHeight] = args;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        console.log("end of page");
        pageNumber++;
        getData();
      }
    }, delay);
  };
}

// To see how many times function are called
function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
