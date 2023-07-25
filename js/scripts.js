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


for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >=2){
        document.write(` <span class=pokemon-list> ${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow, that's big!`);
    }
    else {
        document.write(` <span class=pokemon-list> ${pokemonList[i].name} (height: ${pokemonList[i].height})`);
    }

  };

