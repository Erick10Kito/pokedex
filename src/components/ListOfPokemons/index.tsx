'use client';
import axios from "axios";
import { useEffect, useState } from "react"
import { PokemonCardList } from "../PokemonCardList";

interface IPokemonProps {
    name:string;
    url:string;
  }

export function ListOfPokemon() {

    const [pokemons, setPokemons] = useState<IPokemonProps[]>([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=300").then((response) => {
      setPokemons(response.data.results)
      console.log(response.data.results)
    })
  },[])
    return (
        <>
        {pokemons.map((pokemon, index) => (
            <div key={index}>
              <PokemonCardList url={pokemon.url} />
            </div>
          ))}
          </>
    )
}