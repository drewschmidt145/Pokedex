
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
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.classList.add('button')
        listItem.classList.add('listItem')
        button.innerText = pokemon.name;
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
})();


pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});

