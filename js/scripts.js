
let pokemonRepository = (function () {
    const pokemonArray = [
        {
            name: 'Bulbasaur',
            height: 0.7,
            types: ['grass','poison']
        },
        {
            name: 'Ivysaur',
            height: 1,
            types: ['grass','poison']
        },
        {
            name: 'Venusaur',
            height: 2,
            types: ['grass','poison']
        },
        {
            name: 'Charmander',
            height: 0.6,
            types: ['fire']
        },
        {
            name: 'Charmeleon',
            height: 1.1,
            types: ['fire']
        },
        {
            name: 'Charizard',
            height: 1.7,
            types: ['fire','flying']
        },
        {
            name: 'Squirtle',
            height: 0.5,
            types: ['water']
        },
        {
            name: 'Wartortle',
            height: 1,
            types: ['water']
        },
        {
            name: 'Blastoise',
            height: 1.6,
            types: ['water']
        },
    
    ];
  
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
        console.log(pokemon)
    }

    return { // these are the functions that are returned and automaticatally activated because inside IIFE
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
})();


pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon); // calls the addListItem function inside IIFE
});

