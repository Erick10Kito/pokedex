import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IPokemonCardListProps {
    url:string;
}

export function PokemonCardList({url}:IPokemonCardListProps) {
    const [specificPokemon, setSpecificPokemon] = useState<any>(null)
    useEffect(() => {
        axios.get(url).then((response) => {
            setSpecificPokemon(response.data)
            console.log(response.data)

        })
    },[url])

    if (!specificPokemon) {
        return <p>Carregando...</p>;
    }
    return (
       <div>
        <Image src={specificPokemon.sprites.other.dream_world.front_default} alt="" width={50} height={50}/>
         <h1>{specificPokemon.name}</h1>
       </div>
    )
}