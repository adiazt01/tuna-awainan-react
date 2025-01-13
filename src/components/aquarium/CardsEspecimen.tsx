//importamos el componente
import { type ListOfEspecimens } from "@/type.d"
import { CardEspecimen } from "./CardEspecimen"

interface Props {
    especimens: ListOfEspecimens
}

export const CardsEspecimens = ({especimens}:Props) => {

    return (
        <ul className="gap-4">
            {especimens.map(especimen => (
                //definimos el item 
                <li
                    key= {especimen.id}
                >
                    <CardEspecimen
                        id={especimen.id}
                        name={especimen.name}
                        name_scientific={especimen.name_scientific}
                        img={especimen.img}
                        description={especimen.description}
                    />
                </li>
            ))}
        </ul>
    )
}