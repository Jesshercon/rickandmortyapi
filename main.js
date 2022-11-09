const main =()=>{
fetch("https://rickandmortyapi.com/api/character")

.then(resp=>resp.json())
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error);
});

}
main();

