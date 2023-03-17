console.log("check");

let images = [
  { name: "rose", imgSrc: "./images/roses.jpg", id: 1 },
  { name: "carnation", imgSrc: "./images/carnations.jpg", id: 2 },
  { name: "lily", imgSrc: "./images/lilies.jpg", id: 3 },
  { name: "iris", imgSrc: "./images/iris.jpg", id: 4 },
  { name: "marigold", imgSrc: "./images/marigold.jpg", id: 5 },
  { name: "orchid", imgSrc: "./images/orchids.jpg", id: 6 },
  { name: "tulip", imgSrc: "./images/tulips.jpg", id: 7 },
  { name: "daisy", imgSrc: "./images/ldaisies.jpg", id: 8 },
  { name: "rose", imgSrc: "./images/roses.jpg", id: 9 },
  { name: "carnation", imgSrc: "./images/carnations.jpg", id: 10 },
  { name: "lily", imgSrc: "./images/lilies.jpg", id: 11 },
  { name: "iris", imgSrc: "./images/iris.jpg", id: 12 },
  { name: "marigold", imgSrc: "./images/marigold.jpg", id: 13 },
  { name: "orchid", imgSrc: "./images/orchids.jpg", id: 14 },
  { name: "tulip", imgSrc: "./images/tulips.jpg", id: 15 },
  { name: "daisy", imgSrc: "./images/ldaisies.jpg", id: 16 },
];
console.log(images);

//shuffle the images

let shuffle = () => {
  images.sort(() => Math.random() - 0.5);
  let shuffledImages = console.log(images);
  return shuffledImages;
};
shuffle();
