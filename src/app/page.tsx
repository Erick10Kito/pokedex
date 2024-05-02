"use client";
import { Header } from "@/components/Header";
import { Pokemon } from "@/components/Pokemon";

import axios from "axios";
import { useEffect, useState } from "react";



export interface IListProps {
  name:string;
  url:string;
}


export default function Home() {
  const [list, setList] = useState<IListProps[]>([])

  useEffect(()=> {
    axios.get("https://pokeapi.co/api/v2/pokemon").then( response => {


      setList(response.data.results)
    })
  },[])
  
  return (
    <div>
      <Header/>

        <div className="w-full px-5">
          <div className="flex justify-start w-full py-7 border-b border-gray-300">
          <h1 className="text-4xl font-semibold">Pokemons</h1>
          </div>
          {list.map((item, index) => (
   
              <Pokemon key={index} data={item}/>
            
          ))}
     
         
          
        </div>

    </div>
  );
}
