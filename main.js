const mainContainer = document.querySelector("#mainContainer");

const createCard = (img, name) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card", "d-flex", "w-100", "gap-3");

  const image = document.createElement("img");
  image.classList.add("card-image-top");
  image.src = img;

  const div = document.createElement("div");
  div.classList.add("card-body");

  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.innerText = name;

  cardContainer.appendChild(div);
  div.appendChild(image);
  div.appendChild(h5);

  return cardContainer;
};

const getCharacters = () => {
  fetch("https://rickandmortyapi.com/api/character")
    //http response in JSON format
    .then((response) => response.json())
    .then((data) => {
      //store all characters in a variable
      let characters = data.results;
      //for each character, we retrieve the character's name and image
      characters.forEach((character) => {
        let images = character.image;
        let names = character.name;
        let cards = createCard(images, names);
        mainContainer.appendChild(cards);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
getCharacters();
