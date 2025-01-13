import { createFileRoute, Link } from '@tanstack/react-router'
import './category.css'
import { Category } from '@/components/category/category'
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export const Route = createFileRoute('/articles/category/')({
  component: ArticleRouteComponent,
})

const fetchArts = async (nameQueryToSearch: string | null) => {
    let query = supabase
    .from("articles")
    .select("title, description, img, tag!inner(*), id")
    
    if (nameQueryToSearch) {
        query = query.ilike('tag.name', `%${nameQueryToSearch}%`);
        
    }
    const { data, error } = await query;

    if (error) {
        throw new Error(error.message);
    }
    return data;
}

function ArticleRouteComponent() {
  const querySearch = new URLSearchParams(window.location.search)
  const nameQueryToSearch = querySearch.get('name')
  const { data: articles, error, isLoading } = useQuery({ queryKey: ['articles', nameQueryToSearch], queryFn: () => fetchArts(nameQueryToSearch) });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <><Category />
    
    <section className="w-full px-24 sm:px-5 grid grid-cols-1 mx-auto">
    <div className="font-custom max-w-screen-lg mx-auto gap-8">
        <div className="flex flex-col gap-4">
        <header>
            <h2 className="text-5xl font-bold text-start my-6 mb-4">Artículos</h2>
            <p className="text-base text-gray-700 dark:text-gray-400">
            {articles?.length} Artículos encontrados de la categoría&nbsp;
            <span>{nameQueryToSearch}</span>
            </p>
        </header>

        <div className="card">
            <ul className="grid grid-cols-1">
            {articles &&
                articles.map((article) => (
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
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {article.title}
                    </h5>
                    <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
                        {article.description.substring(0, 290) + "..."}
                    </p>
                    <Button className="hover:bg-[#087b9b]">
                        <Link to={'/articles/category/$categoryid'} params={{categoryid: article.id}}>Leer</Link>
                    </Button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
        </div>
    </div>
    </section>



        
    </>

  );
}
