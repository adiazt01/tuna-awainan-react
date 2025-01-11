import { type Post } from "@/type.d";

interface Props{
    post: Post;
}

export const PostPage = ({post}:Props) =>(
    <div className="container mx-auto p-6">
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{post.title}</h1>
            <h4 className='italic'>Autor: {'Anonimo'}</h4>
            <img src={post.imgFile} alt="" className="w-1/2 h-1/2" />
            <p className="text-gray-700 dark:text-gray-400">{post.text}</p>
        </div>

        <form className="mt-[20px] " method="POST">
            <h3>Deja un comentario</h3>
            <label className="sr-only">Tu comentario</label>
            <textarea
                id="comment"
                name="content"
                rows={6}
                placeholder="Escribe tu comentario aquí..."
                className="w-full p-4 bg-gray-100 rounded-lg dark:bg-gray-800"
                required></textarea>
            <button type="submit" className="bg-[#0aa4bc] px-5 py-4 font-semibold rounded-2xl text-white hover:bg-white hover:text-[#0aa4bc] hover:border-slate-900 hover:border-[1px]">Enviar</button>
        </form>


    </div>
)