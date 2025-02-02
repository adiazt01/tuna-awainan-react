import { LayoutAquarium } from '@/components/aquarium/LayoutAquarium';
import { supabase } from '@/lib/supabase'
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aquarium/letter/$letterid/')({
    
    loader: ({ params }) => fetchEspecimensById(params.letterid),
    component: EspecimensComponent,
})

const fetchEspecimensById = async (letterid) => {

    const { data, error } = await supabase
    .from("especimens")
    .select("*")
    .eq("id", letterid)
    .single();

    if (error) {
        throw new Error(error.message)
    }

    return data;
}

function EspecimensComponent() {

    const { letterid } = Route.useParams()
    const { data: especimen, error } = useQuery({
        queryKey: ['especimen', letterid],
        queryFn: () => fetchEspecimensById(letterid),
    })
    console.log(especimen)

    return (
        <div>
            <LayoutAquarium></LayoutAquarium>
            {
                especimen && (
                    <div>
                            <h2 className='text-5xl text-[#0cc0df] text-center mt-40'>{especimen.name}</h2>
                            <h3 className='text-4xl italic text-center mt-4 -ml-12'> &quot;{especimen.name_scientific}&quot; </h3>
                            <p className='text-center mt-4 mx-20'>&emsp;&emsp;{especimen.description}</p>
                            <img src={especimen.image} className='m-auto mb-10 object-contain w-3/5 h-2/5'/>
                    </div>

            )}
        </div>
    )
}
