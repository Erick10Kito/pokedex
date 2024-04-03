import Image from "next/image";
import LogoPokedex from '../../assets/Pokédex.png'

export function Header() {
    return (
        <div className="flex items-center justify-center py-2 bg-[#000029]">
        <Image src={LogoPokedex} alt="Pokedex"/>

    </div>
    )
}