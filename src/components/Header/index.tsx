import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import  Image  from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PokemonContext } from "@/contexts/PokemonContext";
import LogoPokedex from "../../assets/Pokedex.png";

export function Header() {
  const { numero } = useContext(PokemonContext);
  const params = usePathname();

  return (
    <div className={`flex items-center py-2 bg-white max-w-screen-xl w-full px-5 ${params === '/' ? 'justify-between' : 'justify-center'}`}>
      <Link href="/">
        <Image src={LogoPokedex} alt="Pokedex" width={200}/>     
      </Link>
      {params === '/' && (
        <form>
          <div className="flex items-center gap-4">
            <div className="px-5 py-2 border border-black rounded-full flex items-center gap-2">
              <FaSearch color="gray" />
              <input type="search" name="valueSearch" id="" placeholder="Buscar nome do pokemon" className="focus:outline-none min-w-56 text-lg"/>
            </div>
            <button className="text-lg font-semibold text-white bg-green-800 py-2 px-5 rounded-full">Buscar</button>
          </div>
        </form>
      )}
    </div>
  );
}
