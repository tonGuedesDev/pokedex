async function request() {
  const list = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  ).then((resolve) => resolve.json());

  const pokemons = await Promise.all(
    list.results.map(async (item) => {
      const pokemon = await fetch(item.url).then((resolve) => resolve.json());

      return pokemon;
    })
  );

  renderPokemon(pokemons);
  searchPoke(pokemons);
}

request();

function renderPokemon(pokemons) {
  const div = document.querySelector(".container");

  div.innerHTML = "";
  div.innerHTML += createCard(pokemons);
}

function createCard(pokemons) {
  const cards = pokemons
    .map(
      (item) => `
      <div class="card
      " id="card">
  <div class="card-image">
    <img
      src="${item.sprites.front_default}"
      alt=""
    />
  </div>
  <div class="card-content">
    <div class="card-nome"><p>${item.name}</p></div>
    <div class="card-type"><p>${item.types
      .map((names) => `${names.type.name}`)
      .join(" | ")}</p></div>
  </div>
</div>
    `
    )
    .join("");

  return cards;
}


function searchPoke(data) {
  const inputValue = document.querySelector(".search-input");

  inputValue.addEventListener("input", (e) => {
    const searchPokemons = data.filter((elements) =>
      elements.name.includes(e.target.value.toLowerCase())
    );

    if (!searchPokemons.length) {
      renderError();
    } else {
      renderPokemon(searchPokemons);
    }
  });
}

function renderError() {
  const div = document.querySelector(".container");

  div.innerHTML = `<span class="error">Pokemon não encontrado</span>`;
}
