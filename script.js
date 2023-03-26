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
let moves = 0;
let container = document.querySelector("#container");
let createCards = () => {
  let shuffledImages = shuffle();
  console.log(shuffledImages[0]);
  container = document.querySelector("#container");
  game = document.querySelector("#game");
  let cards = document.createElement("div");
  cards.classList.add("cards");
  game.appendChild(cards);
  shuffledImages.forEach((image) => {
    let card = document.createElement("div");
    let front = document.createElement("img");
    let back = document.createElement("div");
    front.src = image.imgSrc;
    card.classList.add("card");
    card.setAttribute("name", image.name);
    front.classList.add("front");
    back.classList.add("back");
    cards.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
    //check if card is getting clicked

    card.addEventListener("click", (e) => {
      card.classList.toggle("flip");
      compareCards(e);
      moves++;

      if (moves % 2 === 0) {
        document.querySelector("#moves").innerHTML = moves / 2;
      }

      if (moves === 1) {
        timer = true;
        startStopWatch();
      }
    });
  });
};
createCards();

//compare cards
// let moves = 0;
let matchedCards = 0;
let compareCards = (e) => {
  let selectedCard = e.target;
  console.log(selectedCard);
  selectedCard.classList.add("selected");
  let selectedCards = document.querySelectorAll(".selected");
  console.log(selectedCards);

  if (selectedCards.length === 2) {
    if (
      selectedCards[0].getAttribute("name") ===
      selectedCards[1].getAttribute("name")
    ) {
      console.log(`Cards match`);
      matchedCards++;
      if (matchedCards === 8) {
        document.querySelector("#end").innerHTML = "All cards matched!";
        stopStopWatch();
      }
      selectedCards.forEach((card) => {
        card.classList.remove("selected");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log(`Cards don't match`);
      selectedCards.forEach((card) => {
        card.classList.remove("selected");
        setTimeout(() => card.classList.remove("flip"), 1000);
      });
    }
  }
};

//restart
let restart = document.querySelector("#reset");
restart.addEventListener("click", () => {
  cards = document.querySelector(".cards");
  console.log("restart clicked");
  moves = 0;
  document.querySelector("#moves").innerHTML = moves;
  document.querySelector("#end").innerHTML =
    "Start matching cards.<br/>Good luck!";
  resetStopWatch();
  console.log(moves);
  cards.remove();
  createCards();
});
//stopwatch
let minutes = 0;
let seconds = 0;
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let Interval = 0;

let startStopWatch = () => {
  min.innerHTML = "0";
  sec.innerHTML = "0";
  Interval = setInterval(startTimer, 1000);
};

let stopStopWatch = () => {
  clearInterval(Interval);
};
let resetStopWatch = () => {
  clearInterval(Interval);
  minutes = 0;
  seconds = 0;
  min.innerHTML = "0";
  sec.innerHTML = "0";
};

let startTimer = () => {
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
  seconds++;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    minutes = 0;
    seconds = 0;
  }
};
