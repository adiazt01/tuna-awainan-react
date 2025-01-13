import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";

const fetchArts = async () => {
    const { data, error } = await supabase
    .from("articles")
    .select("title, description, img, id")
    .order("id", { ascending: false })

    if (error) {
        throw new Error(error.message);
    }
    return data;
}


export function Articles() { 

    const { data: articles} = useQuery({ queryKey: ['articles'], queryFn: () => fetchArts() });

    return(
    
    
    <section className="w-1/2 px-24 sm:px-5 grid grid-cols-1 mx-auto">
        <div className="font-custom max-w-screen-lg mx-auto gap-8">
            <div className="flex flex-col gap-4">
            <header>
                <h2 className="text-5xl font-bold text-start my-6 mb-4">Artículos</h2>
            </header>

            <div className="card">
                <ul className="grid grid-cols-1">
                {articles &&
                    articles.slice(0, 2).map((article, index) => (
                    <li
                        
                        className="flex flex-row bg-white shadow-md rounded-lg overflow-hidden mb-16"
                    >
                        {/* Imagen del artículo */}
                        <div className="w-1/2 h-auto">
                        <img
                            className="object-cover w-full h-full"
                            src={article.img}
                            alt={article.title}
                        />
                        </div>

                        {/* Contenido del artículo */}
                        <div className="w-1/2 p-6 flex flex-col justify-between">

                        <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {index === 0 ? (
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            ) : null    }
                            {article.title.substring(0, 50) + "..."}
                        </span>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {article.description.substring(0, 70) + "..."}
                        </p>
                        <Button className="hover:bg-[#087b9b]">
                            <Link to={'/articles/category/$categoryid'} params={{categoryid: article.id}}>Leer</Link>
                        </Button>
                        </div>
                    </li>
                    ))}
                    <hr />
                </ul>
            </div>
            </div>
        </div>
    </section>
    )
}