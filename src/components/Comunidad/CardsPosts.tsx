import { ListOfEspecimens, type ListOfPosts } from "@/type.d"
import { CardPost } from "./CardPost"

interface Props{
    posts: ListOfPosts
}

export const CardsPosts = ({posts}:Props) => {
    return(
        <li>
            {posts.map(post => (
                <ul>
                    <CardPost post={post}/>
                </ul>
            ))}
        </li>
    )
}