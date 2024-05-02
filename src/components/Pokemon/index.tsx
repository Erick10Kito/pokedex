import { IListProps } from "@/app/page";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IPokemonDetailsProps {
  name: string;
  base_experience: number;
  sprites: {
    front_default: string;
  };
}

interface IPokemonProps {
  data: IListProps;

}

export function Pokemon({ data }: IPokemonProps) {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetailsProps | null>(
    null
  );

  useEffect(() => {
    axios.get(data.url).then((response) => {
      setPokemonDetails(response.data);
    });
  }, [data.url]);

  if (pokemonDetails === null) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex items-center gap-4">
      <div>
        <Image
          src={pokemonDetails.sprites.front_default}
          alt=""
          height={50}
          width={50}
        />
      </div>
      <div>
        <p>
          {pokemonDetails.name} - {pokemonDetails.base_experience}EXP
        </p>
      </div>
    </div>
  );
}
