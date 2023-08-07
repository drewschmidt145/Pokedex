
let pokemonRepository = (function () {
    const pokemonArray = [];
    
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  
    function add(pokemon) {
      pokemonArray.push(pokemon);
    }
  
    function getAll() {
      return pokemonArray;
    }
    
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list'); // this selects the <ul> within HTML
        let listItem = document.createElement('li'); // these 2 add elements to be added within the <ul>
        let pokemonButton = document.createElement('button');

        pokemonButton.classList.add('button') // these adds classes to the elements
        listItem.classList.add('listItem')

        pokemonButton.innerText = pokemon.name; // what is written inside the button

        listItem.appendChild(pokemonButton); // these two append to each other in HTML
        pokemonList.appendChild(listItem);

        pokemonButton.addEventListener('click', function(event) { // this is an event when click on specific pokemon button
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }


    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e)
        });
    }

    return { // these are the functions that are returned and automaticatally activated because inside IIFE
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails
    };
})();


pokemonRepository.loadList().then(function () {

    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });

});

