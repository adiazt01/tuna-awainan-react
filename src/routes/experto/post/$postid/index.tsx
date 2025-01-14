import CommentItem from '@/components/CommentItem';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { getProfileId, getSession } from '@/services/auth';
import { fetchComments, postComment } from '@/services/comments';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router'
import Map from '@/components/map/mapposts'

export const Route = createFileRoute('/experto/post/$postid/')({
  
    loader: ({ params }) => fetchPostById(params.postid),
    component: PostComponent,
})

const fetchPostById = async (postid) => {
    const { data, error } = await supabase
    .from("posts")
    .select("*, profiles(username)")
    .eq('id', postid)
    .single();
    
    if (error) {
        throw new Error(error.message);
    }
    return data;
}

function PostComponent() {

    const { postid } = Route.useParams();
    const queryClient = useQueryClient();

    const { data: posts, isLoading, error } = useQuery({
        queryKey: ['posts', postid], // Key única para esta consulta
        queryFn: () => fetchPostById(postid) // Función para obtener datos
        }
    );
    const { data: comments } = useQuery({
        queryKey: ['ComentsPost', postid], // Key única para esta consulta
        queryFn: () => fetchComments(postid) // Función para obtener datos
    });

    const { data: session } = useQuery({
        queryKey: ['session'],
        queryFn: getSession,
    });

    const { data: id_user } = useQuery({
        queryKey: ['profiles'],
        queryFn: () => getProfileId(session?.user.id),
    })

    const mutation = useMutation({
        mutationFn: async (newComment) => {
            const position = queryClient.getQueryData(['position']);
            await postComment(postid, newComment, id_user, position);
        },
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries({ queryKey: ['comments', postid] });
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!session) {
            toast({
                title: 'Error',
                description: 'Debes estar registrado para poder comentar',
            });
        }
        const formData = new FormData(e.target);
        const content = formData.get('content');
        mutation.mutate(content);
        e.target.reset();
    };
    

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (

        <div>
        <div className='mx-8 my-2 font-light text-gray-400'>
            <p>
                Autor: {posts.profiles.username}
                    
            </p>
            <p>
                Fecha: {posts.fecha}
            </p>
        </div>
        <Button className='m-8 hover:bg-[#087b9b]'>
            <Link to={'/experto/post'}>
                Atrás
            </Link>
        </Button>
        
        <div className='max-w-4xl mx-auto p-6 bg-white rounded-xl mb-8'>
            <img src={posts.img} alt="" className='w-full h-64 object-cover rounded-lg mb-6'/>

            <h2 className='text-3xl font-bold mb-4'>
                {posts.title}
            </h2>

            <p className='text-gray-700 leading-relaxed'>
                {posts.content}
            </p>
            <hr />
            <Map postid={postid}></Map>
            <form className="mb-6 flex flex-col w-full mt-5" onSubmit={handleSubmit}>
            <div
            className="w-full py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-white dark:border-gray-700"
            >
            <label htmlFor="comment" className="sr-only">Tu comentario</label>
            <textarea
                id="comment"
                name="content"
                rows={6}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-white"
                placeholder="Escribe tu comentario"
                required></textarea>
            </div>
            <button
            type="submit"
            className="inline-flex items-center bg-[#0cc0df] ml-auto py-2.5 px-4 text-xs font-medium text-center text-white bg-[p] rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
            Enviar
            </button>
        </form>

        <div className="comments-section">
            <h3 className='mb-4'>Comentarios</h3>
                <div className='grid grid-cols-1 gap-2'>
                    {
                        comments?.map((comments) => (
                            <CommentItem username={comments.profiles.username} created_at={comments.created_at} text={comments.content}>
                            </CommentItem>
                        ))
                    }
                </div>
    
        </div>
        </div>
        


        
        </div>
    );
}

