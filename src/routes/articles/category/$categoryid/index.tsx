import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createFileRoute, Link} from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';


export const Route = createFileRoute('/articles/category/$categoryid/')({
  
    loader: ({ params }) => fetchArticleById(params.categoryid),
    component: ArticleComponent,
})

const fetchArticleById = async (categoryid) => {
    const { data, error } = await supabase
    .from("articles")
    .select("title, description, img")
    .eq('id', categoryid);

    if (error) {
        throw new Error(error.message);
    }
    return data;
}

function ArticleComponent() {

    const { categoryid } = Route.useParams()
    const { data: articles, isLoading, error } = useQuery({
        queryKey: ['articles', categoryid], // Key única para esta consulta
        queryFn: () => fetchArticleById(categoryid) // Función para obtener datos
        }
    );
    const article = articles && articles[0];
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <><Button className='m-8'>
            <Link to={'/articles/category'}>
                Atrás
            </Link>
        </Button>
        
        <div className='max-w-4xl mx-auto p-6 bg-white rounded-xl mb-8'>
            <img src={article.img} alt="" className='w-full h-64 object-cover rounded-lg mb-6'/>

            <h2 className='text-3xl font-bold mb-4'>
                {article.title}
            </h2>

            <p className='text-gray-700 leading-relaxed'>
                {article.description}
            </p>
        </div>
        
        </>
    );
}

