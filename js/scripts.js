
let pokemonRepository = (function () {
    const pokemonList = [];
    
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
    
    function addListItem(pokemon) {
        let pokemonRow = document.getElementById('pokemonRow'); // this selects the <ul> within HTML
        let listItem = document.createElement('li'); // these 2 add elements to be added within the <ul>
        let pokemonButton = document.createElement('button');

        $(pokemonRow).addClass('list-group');

        $(pokemonButton).addClass('button', 'btn', 'btn-primary').attr('type', 'button')
          .attr('data-toggle', 'modal').attr('data-target', '#modal-container');

        $(listItem).addClass('listItem', 'list-group-item', 'col-lg-3', 'col-med-4', 'col-sm-6');


        pokemonButton.innerText = pokemon.name; // what is written inside the button

        listItem.appendChild(pokemonButton); // these two append to each other in HTML
        pokemonRow.appendChild(listItem);

        pokemonButton.addEventListener('click', function(event) { // this is an event when click on specific pokemon button
            showDetails(pokemon);
        });

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



    function showDetails(item) {
      loadDetails(item).then(function () {
        const modalTitle = document.getElementById('modal-title');
        const modalHeight = document.getElementById('modal-height');
        const modalImage = document.getElementById('modal-image');
        const modalClose = document.getElementById('modal-close');

        modalTitle.textContent = 'Name: ' + item.name;
        modalHeight.textContent = 'Height: ' + item.height + ' m';

        modalImage.setAttribute('src', item.imageUrl);
        modalImage.setAttribute('alt', item.name);

      });
    }


    return { // these are the functions that are returned and automaticatally activated because inside IIFE
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
    };
})();


pokemonRepository.loadList().then(function () {

    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });

});

