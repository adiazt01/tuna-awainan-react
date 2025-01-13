import { type Post } from "@/type.d"
import { Link } from "@tanstack/react-router"

interface Props {
    post: Post
}

export const CardPost = ({post}:Props) => {
    return(

        <button className="block m-[10px] max-w-md w-[450px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    
            <Link to={`/comunidad/$post_id`} params={{post_id: post.id}} className="text-blue-500 hover:text-blue-700 text-left">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{post.content.substring(0,60) + '...'}</p>
            
            </Link>
        </button>
    )
}
