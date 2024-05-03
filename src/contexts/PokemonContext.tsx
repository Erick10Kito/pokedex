import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

interface IPokemonProviderProps {
    children: ReactNode
}

interface IPokemonContextProps {
    numero: number;
}

export const PokemonContext = createContext({} as IPokemonContextProps)

export function PokemonProvider({children}:IPokemonProviderProps) {

    const [allPokemons, setAllPokemons] = useState<any[]>()
    const [globalPokemons, setGlobalPokemons] = useState<any[]>([])

    const [offset, setOffset] = useState(0)

    //Chamar 50 pokemons da API
    async function getAllPokemons(limit = 50) {
        const baseURL = 'https://pokeapi.co/api/v2';
    
        try {
            const response = await axios.get(`${baseURL}/pokemon?limit=${limit}&offset=${offset}`);
            const pokemonData = response.data;
            
            const promises = pokemonData.results.map(async (pokemon: any) => {
                const pokemonResponse = await axios.get(pokemon.url);
                const pokemonDetails = pokemonResponse.data; 
                return pokemonDetails;
            });

            
    
            const results = await Promise.all(promises);
            console.log(results);

            setAllPokemons(results)
        } catch (error) {
            console.error('Erro ao obter os pokémons:', error);
        }
    }


    //Chamar todos os pokemons
    async function getGlobalPokemons() {
        const baseURL = 'https://pokeapi.co/api/v2';
    
        try {
            const response = await axios.get(`${baseURL}/pokemon?limit=10000000&offset=0`);
            const pokemonData = response.data;
            
            const promises = pokemonData.results.map(async (pokemon: any) => {
                const pokemonResponse = await axios.get(pokemon.url);
                const pokemonDetails = pokemonResponse.data; 
                return pokemonDetails;
            });

            
    
            const results = await Promise.all(promises);
            console.log(results);

            setGlobalPokemons(results)
        } catch (error) {
            console.error('Erro ao obter os pokémons:', error);
        }
    }
    

    useEffect(() => {
        getAllPokemons()
    },[])


    useEffect(() => {
        getGlobalPokemons()
    },[])

    return (
        <PokemonContext.Provider value={{
            numero: 0,
        }}>
            {children}
        </PokemonContext.Provider>
    )

}