import { Especimen } from "@/type.d"
import { Props } from "node_modules/@supabase/auth-ui-react/dist/components/Auth/UserContext"

interface Prosp {
    especimen: Especimen
}

export const EspecimenPage = ({especimen}:Prosp) => {
    return (
        <div className="font-sans m-auto text-center ">
            <div className="w-9/12 m-auto">
                <h2 className="text-[52px] color-primary text-left font-semibold">{especimen.name}</h2>
                <h3 className='text-[38px] font-mono italic text-left '>{especimen.namePsientific}</h3>
            </div>
            <p className='p-[100px]'>&emsp;&emsp;{especimen.description}</p>
            <img className="object-contain m-auto mb-10 w-4/6 h-4/5" src={especimen.img}/>
        </div>
    )
}  