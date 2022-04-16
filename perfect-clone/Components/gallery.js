const template = document.querySelector("[scrolling-template]");
const container = document.getElementById("galleryContainer");

let page = 1;
let galleryQuery = "funny";

// using pexel api
async function getGalleryImages(query) {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=100&page=${page}&orientation=portrait`,
    {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f9170000100000119310439abd04938a6eab6c8fdaf39ee",
      },
    }
  );

  const result = await response.json();
  page++;
  return result.photos.sort((a, b) => a.id - b.id);
}

// pexel
async function getGalleryImagesById(id) {
  const response = await fetch(
    `https://api.pexels.com/v1/collections/${id}?per_page=50&page=${page}&type=photos`,
    {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f9170000100000119310439abd04938a6eab6c8fdaf39ee",
      },
    }
  );

  const result = await response.json();
  page++;
  return result.media;
}

async function setGalleryImages(query) {
  const data = await getGalleryImages(query || "funny");

  data.forEach((item) => {
    const card = template.content.cloneNode(true).children[0];

    card.innerHTML = `<div>
                        <img src="${item.src.portrait}">
                    </div>
                    <div>
                      <span>${item.alt}</span>
                      <div>
                        <span><span><img src="../Images/upvote.svg" style="width: 18px"></span><span>${item.height}</span></span>
                        <span><span><img src="../Images/comment_icon.svg" style="width: 18px"></span><span>${item.width}</span></span>
                        <span><span><img src="../Images/views_icon.svg" style="width: 18px"></span><span>30K</span></span>
                      </div>
                    </div>`;

    container.append(card);
  });
}

const galleryObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};
const galleryObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.target.id == "pageEnd") {
      if (entry.isIntersecting) {
        setGalleryImages(false, galleryQuery);
      }
    }
  });
};
const galleryObserver = new IntersectionObserver(galleryObserverCallback);
const galleryTarget = document.getElementById("pageEnd");
galleryObserver.observe(galleryTarget);

const pageEnd = document.getElementById("pageEnd");

export {
  getGalleryImages,
  setGalleryImages,
  pageEnd,
  galleryObserverCallback,
  galleryObserverOptions,
  galleryObserver,
  galleryTarget,
  getGalleryImagesById,
};
