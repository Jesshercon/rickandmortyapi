
const charactersContainer=document.getElementById('charactersContainer');

const characterCard= (character)=>{
const containerCard= document.createElement('div');
containerCard.classList.add('card', 'col-4');
containerCard.setAttribute('style', 'width:18rem');


    const characterImage=document.createElement('img');
    characterImage.setAttribute('src',character.image);
    characterImage.classList.add('card-img-top');

    const cardBody= document.createElement('div');
    cardBody.classList.add('card-body');


    const cardText= document.createElement('p');
    cardText.classList.add('card-text', 'fw-bold');
    cardText.innerText= character.name;

    const cardStatus= document.createElement('p');
    cardStatus.classList.add('card-text');
    cardStatus.innerText= character.status;

    const cardSpecies= document.createElement('p');
    cardSpecies.classList.add('card-text');
    cardSpecies.innerText= character.species;
    
    containerCard.appendChild(characterImage);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardStatus);
    cardBody.appendChild(cardSpecies);

    containerCard.appendChild(cardBody);     
    charactersContainer.appendChild(containerCard);
}



const main =()=>{
fetch("https://rickandmortyapi.com/api/character")

.then(resp=>resp.json())
.then(data=>{
    data.results.forEach(character => {
        characterCard(character);
    });
})
.catch(error=>{
    console.log(error);
});

}

main();