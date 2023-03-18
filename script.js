console.log("check");

let images = [
  { name: "rose", imgSrc: "./images/roses.jpg", id: 1 },
  { name: "carnation", imgSrc: "./images/carnations.jpg", id: 2 },
  { name: "lily", imgSrc: "./images/lilies.jpg", id: 3 },
  { name: "iris", imgSrc: "./images/iris.jpg", id: 4 },
  { name: "marigold", imgSrc: "./images/marigold.jpg", id: 5 },
  { name: "orchid", imgSrc: "./images/orchids.jpg", id: 6 },
  { name: "tulip", imgSrc: "./images/tulips.jpg", id: 7 },
  { name: "daisy", imgSrc: "./images/daisies.jpg", id: 8 },
  { name: "rose", imgSrc: "./images/roses.jpg", id: 9 },
  { name: "carnation", imgSrc: "./images/carnations.jpg", id: 10 },
  { name: "lily", imgSrc: "./images/lilies.jpg", id: 11 },
  { name: "iris", imgSrc: "./images/iris.jpg", id: 12 },
  { name: "marigold", imgSrc: "./images/marigold.jpg", id: 13 },
  { name: "orchid", imgSrc: "./images/orchids.jpg", id: 14 },
  { name: "tulip", imgSrc: "./images/tulips.jpg", id: 15 },
  { name: "daisy", imgSrc: "./images/daisies.jpg", id: 16 },
];
console.log(images);

//shuffle the images

let shuffle = () => {
  images.sort(() => Math.random() - 0.5);
  console.log(images);
  return images;
};
shuffle();
//create cards
let container = document.querySelector("#container");
let createCards = () => {
  let shuffledImages = shuffle();
  console.log(shuffledImages[0]);
  container = document.querySelector("#container");
  let cards = document.createElement("div");
  cards.classList.add("cards");
  container.appendChild(cards);
  shuffledImages.forEach((image) => {
    let card = document.createElement("div");
    let front = document.createElement("img");
    let back = document.createElement("div");
    front.src = image.imgSrc;
    card.classList.add("card");
    front.classList.add("front");
    back.classList.add("back");
    cards.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });
};
createCards();
