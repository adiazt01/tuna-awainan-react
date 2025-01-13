
import { Link } from "@tanstack/react-router"

interface Props {
    letter: string;
    selected: boolean;
}

export const Letter = ({letter,selected}:Props) => {

    let estilo = "cursor-pointer  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm text-center inline-flex items-center font-bold me-2 px-3.5 py-2.5 hover:bg-[#0cc0df] hover:opacity-80 transition"

    selected ? estilo += "bg-[#0cc0df] text-white" : estilo += "bg-white text-black"

    return(
    
    <button>
        <Link type="button" to={`/aquarium/$letter`} params={{ letter: letter }}
        className={estilo}
    >
            {letter}
        </Link>

    </button>

    
        )     
    
}