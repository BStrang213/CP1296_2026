"use strict"

async function getPokemonData(pokemonid) {
    const domain = `https://pokeapi.co/api/v2/pokemon/`;
    const request = `${pokemonid}`;
    const response = await fetch(domain + request);
    return await response.json();
}

document.addEventListener("DOMContentLoaded", ()  => {
    const pokemonID = document.querySelector("#pokemonID");
    const getPokemon = document.querySelector("#getPokemon");
    const pokeName = document.querySelector("#pokemon_name");
    const dexID = document.querySelector("#pokedex_ID");
    const height = document.querySelector("#height");
    const weight = document.querySelector("#weight");
    const sprite = document.querySelector("#sprite");
    const types = document.querySelector("#types");
    const abilities = document.querySelector("#abilities");
    getPokemon.addEventListener("click", async () => {
        const pokeData = await getPokemonData(pokemonID.value);
        console.log(pokeData);
        pokeName.textContent = pokeData.name;
        dexID.textContent = pokeData.id;
        height.textContent = pokeData.height;
        weight.textContent = pokeData.weight;
        sprite.URL = pokeData.sprite.front_default;
        types.textContent = pokeData.types;
        abilities.textContent = pokeData.abilities;
    })
})