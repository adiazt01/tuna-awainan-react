import { EspecimenPage } from '@/components/aquarium/EspecimenPage'
import { LayoutEspecimen } from '@/components/aquarium/layout/LayoutEspecimen'
import { createFileRoute } from '@tanstack/react-router'
import { supabase } from '@/lib/supabase'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/aquarium/$letter/$especimen_id/')({
loader: async ({ params }) => GetEspecimenId(params.especimen_id),
  component: RouteComponent,
})


const GetEspecimenId = async (id: string) => {
    const {data, error} = await supabase.from('especimens').select('*').eq('id', parseInt(id))
    if(error){
        throw error
    }
    return data

}



function RouteComponent() {

    const {especimen_id,letter} = Route.useParams()

    //hacemos la consulta 
    const {data,error,isLoading} = useQuery(
        {queryKey: ['especimens', 'id'], 
        queryFn: () => GetEspecimenId(especimen_id)
    });

    if(error){
        return <div>Error: {error.message}</div>
    }

    if(isLoading){
        return <div>Cargando...</div>
    }

    console.log(data)



  return <div>

    <LayoutEspecimen _letter={letter}>

        <EspecimenPage especimen={data[0]} />

    </LayoutEspecimen>

  </div>
}
