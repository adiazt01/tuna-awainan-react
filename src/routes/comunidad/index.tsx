import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { getPosts } from '@/services/comunidad'
import { CardsPosts } from '@/components/Comunidad/CardsPosts'
import { LayoutComunidad } from '@/components/Comunidad/Layout/LayoutComunidad'

export const Route = createFileRoute('/comunidad/')({
  component: RouteComponent,
})

//consultamos los post 

function RouteComponent() {

    //obtenermos los posts
    const {data, error, isLoading} = useQuery(
        {queryKey: ['posts'],
        queryFn: () => getPosts()}     
    )

    console.log(data)

    if(isLoading){
        return <div>Cargando...</div>
    }

    if(error){
        return <div>Error: {error.message}</div>
    }



  return <LayoutComunidad>
            <CardsPosts posts={data} />
        </LayoutComunidad>
    
}
