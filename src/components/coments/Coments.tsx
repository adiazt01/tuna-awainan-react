import { type ComentsPosts } from "@/type.d"
import { Coment } from "./Coment"

interface Props{
    coments: ComentsPosts
}

export const Coments = ({coments}:Props) => {
    return(

        <ul>
            {coments.map((coment) => (
                <li>
                    <Coment coment={coment} />
                </li>
            ))}
        </ul>
    )

}