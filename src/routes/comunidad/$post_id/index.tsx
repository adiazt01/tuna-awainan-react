import { LayoutComunidad } from '@/components/Comunidad/Layout/LayoutComunidad'
import { PostPage } from '@/components/Comunidad/PostPage'
import { getPostbyId } from '@/services/comunidad'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { BackArrow } from '@/components/Interaccion/ArrowBack'

export const Route = createFileRoute('/comunidad/$post_id/')({
  loader: async ({ params }) => getPostbyId(parseInt(params.post_id)),
  component: RouteComponent,
})

function RouteComponent() {

    const {post_id} = Route.useParams()

    //hacemos la consulta 
    const {data: post, error,isLoading} = useQuery(
        {queryKey: ['post', post_id],
        queryFn: () => getPostbyId(parseInt(post_id))}     
    )

    console.log(post)

    if(isLoading){
        return <div>Cargando...</div>
    }
    if(error){
        return <div>Error: {error.message}</div>
    }


  return <div>
            <LayoutComunidad>
                <BackArrow ruta='/comunidad/' />
                
                <PostPage post={post[0]} coments={[]} />
            </LayoutComunidad>

        </div>
}
