'use client';
import { PokemonCardList } from "@/components/PokemonCardList";
import axios from "axios";

import { useEffect, useState } from "react";


interface IPokemonProps {
  name:string;
  url:string;
}
export default function Home() {
  const [pokemons, setPokemons] = useState<IPokemonProps[]>([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=300").then((response) => {
      setPokemons(response.data.results)
      console.log(response.data.results)
    })
  },[])


  return (
    <div>
      <h1>Listagem de Pokemons</h1>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <PokemonCardList url={pokemon.url} />
        </div>
      ))}
    </div>
  );
}
