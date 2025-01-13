import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

const fetchPost = async () => {
    const { data, error } = await supabase
    .from("posts")
    .select("*, profiles(username)")
    .order("id", { ascending: false });

    if (error) {
        throw new Error(error.message);
    }
    return data;
}


export function Expert(){
    const { data: posts, error, isLoading } = useQuery({ 
        queryKey: ['posts'], 
        queryFn: fetchPost 
      });    

    return (
        <section className="w-1/2 px-24 sm:px-5 grid grid-cols-1 mx-auto">
        <div className="font-custom max-w-screen-lg gap-8">
            <div className="flex flex-col gap-4">
                <header>
                    <h2 className="text-5xl font-bold text-start my-6 mb-4">Hablando con Expertos</h2>
                </header>
                <div className="card">
                  <ul className="grid grid-cols-1">
                  {posts &&
                      posts.slice(0, 2).map((post, index) => (
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
                          <span className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {index === 0 ? (
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                ) : null    }
                              {post.title}
                          </span>
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
                      <hr />
                  </ul>
                </div>
            </div>
        </div>
    </section>
    
    )


}