
let pokemonRepository = (function () {
    const pokemonList = [
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
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
  
    return {
      add: add,
      getAll: getAll
    };
})();


/*
pokemonRepository.getAll().function pokemonListFunction(item) {
      if (item.height >=2){
          document.write(` <span class=pokemon-list> ${item.name} (height: ${item.height}) - Wow, that's big!`);
      }
      else {
          document.write(` <span class=pokemon-list> ${item.name} (height: ${item.height})`);
      }
};
*/

pokemonRepository.getAll().forEach(function (pokemon) {
    if (pokemon.height >=2){
        document.write(` <span class=pokemon-list> ${pokemon.name} (height: ${pokemon.height}) - Wow, that's big!`);
    }
    else {
        document.write(` <span class=pokemon-list> ${pokemon.name} (height: ${pokemon.height})`);
    }
});
