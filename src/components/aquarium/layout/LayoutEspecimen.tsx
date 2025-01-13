import { Letter } from "../Letter";
import { CargarLetters } from "../GetLetters";
import { Abecedario } from "@/services/aquarium";

interface Props {
    _letter: string,
    children: React.ReactNode
}

//consultamos la letras


export const LayoutEspecimen = ({_letter,children}:Props) => {
    const letters = Abecedario();
    console.log(letters)
    return (
        <div>
            <div className="flex flex-row pt-8 justify-center flex-wrap gap-x-4 gap-y-4 bg-[#0cc0df] text-center">
          {
              letters?.map((letter) => (
                  <Letter key={letter} letter={letter} selected={letter == _letter} />
              ))
          }
            </div>

            {children}
        </div>
        
    )

}