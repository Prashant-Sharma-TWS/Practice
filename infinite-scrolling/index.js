const template = document.querySelector("[scrolling-template]");
const container = document.querySelector("[infinite-scrolling-container]");

let data = [],
  pageNumber = 1;
let observer;

const lastElement = (card) => {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
      pageNumber++;
      container.children[1].textContent = `Loading...`;
      await setTimeout(getData, 300);
      //   container.children[1].textContent = ``;
    }
  });
  observer.observe(card);
};

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
    if (data.length === index + 1) lastElement(card);
  });
};
getData();

container.addEventListener("scroll", (e) => {
  console.log(e);
});
