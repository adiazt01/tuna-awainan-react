import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { getSession } from '@/services/auth';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/experto/post/')({
  component: ExpertComponent,
})

const fetchPost = async () => {
    const { data, error } = await supabase
    .from("posts")
    .select("*, profiles(username)");

    if (error) {
        throw new Error(error.message);
    }
    return data;
}

const getRole = async (id) => {
  const { data: role, error } = await supabase
  .from("profiles")
  .select("role")
  .eq('id', id)
  .single();

  if (error) {
    throw new Error(error.message);
  }

  return role;

}

function ExpertComponent() {
  const { data: posts, error, isLoading } = useQuery({ 
    queryKey: ['posts'], 
    queryFn: fetchPost 
  });

  const { data: session } = useQuery({ 
    queryKey: ['session'], 
    queryFn: getSession 
  });

  const { data: user } = useQuery({
    queryKey: ['profiles', session?.user?.id],
    queryFn: () => getRole(session?.user?.id),
    enabled: !!session // Only run query if session exists
  });

  const session_user = user?.role;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (<>
  <section className="w-full px-24 sm:px-5 grid grid-cols-1">
      <div className="font-custom max-w-screen-lg gap-8">
          <div className="flex flex-col gap-4">
          <header>
              <h2 className="text-5xl font-bold text-start my-6 mb-4">Hablando con Expertos</h2>
              <p className="text-base text-gray-700 dark:text-gray-400">
                Foros publicados: {posts?.length}
              </p>
          </header>
          {
            session_user === "specialist" || session_user === "admin" ? (
              <Button className='w-1/6 hover:bg-[#087b9b]'>
                <Link to={'/experto/post/new'}>Crear un nuevo post</Link>
              </Button>
            ) : (
              <Button className='w-1/6 hover:bg-[#087b9b]'>
                <a href="mailto:grupotunawainan@gmail.com?subject=Solicitud para crear posts&body=Coloque su usuario y escriba la razon del porque quiere crear un post en la pagina.">
                  Solicitud para crear posts
                </a>
              </Button>
            )
          } 

            <div className="card">
              <ul className="grid grid-cols-1">
              {posts &&
                  posts.map((post) => (
                  <Link to={'/experto/post/$postid'} params={{postid: post.id}}>
                  <li
                      
                      className="flex flex-row bg-white shadow-md rounded-lg overflow-hidden mb-16"
                  >
                      {/* Imagen del artículo */}
                      <div className="w-1/2 h-auto">
                      <img
                          className="object-cover w-full h-full"
                          src={post.img}
                          alt={post.title}
                      />
                      </div>

                      {/* Contenido del artículo */}
                      <div className="w-1/2 p-6 flex flex-col justify-between">
                      <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {post.title}
                      </h5>
                      <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
                          {post.content.substring(0, 290) + "..."}
                      </p>

                      <p className='font-light text-gray-400'>
                        Autor: {post.profiles.username}
                        
                      </p>
                      <p className='font-light text-gray-400'>
                        Fecha: {post.fecha}
                      </p>
                      </div>
                  </li>
                  </Link>
                  ))}
              </ul>
          </div>
        </div>
    </div>
  </section>
  <hr />
  <footer className='bg-white h-10p border-1 p-5 text-xs text-bold'>

    Tuna awainan no se hace responsable por la información que suban los usuarios a esta página.

  </footer>
  </>
)
}
