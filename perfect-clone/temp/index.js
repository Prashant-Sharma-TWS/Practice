const container = document.querySelector("[infinite-scrolling-container]");
const template = document.querySelector("[scrolling-template]");
const url = [
  "https://img-clone.herokuapp.com/data",
  "https://g.tenor.com/v1/trending?key=AD8OM2MUXKQ4",
];
let page = 1,
  limit = 20,
  query = "funny";

const getData = async (query) => {
  let response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=450&page=${page}&orientation=portrait`,
    {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f9170000100000119310439abd04938a6eab6c8fdaf39ee",
      },
    }
  );

  const result = await response.json();
  const data = result.photos.sort((a, b) => a.id - b.id);

  data.map((singleItem) => {
    let item = {
      id: singleItem.id,
      title: `${singleItem.alt}`,
      image: `${singleItem.url}`,
      comment: `${singleItem.width}`,
      ups: `${singleItem.height}`,
      views: `${singleItem.id}`,
    };

    const card = template.content.cloneNode(true).children[0];

    card.innerHTML = `
                    <div class="image" data-image><img src='${item.image}' alt="${item.title}" /></div>
                    <div class="title" data-title>${item.title}</div>
                    <div>
                    <div class="up-down" data-up-down></div>
                    <div class="comments" data-comments></div>
                    <div class="views" data-views></div>
                    </div>
                    `;

    container.children[0].append(card);
    console.log(singleItem);
  });
};

getData(query);
