import { supabase } from "@/lib/supabase";

export const setPost = async (title: string, content: string, userId) => {
    const { data, error } = await supabase
    .from('posts')
    .insert([
        {
            title,
            content,
            user_id: userId
        }
    ])
    if (error) {
        console.error(error);
    }
    
    return data;

}

export const setForum = async (title: string, content: string, userId) => {
    const { data, error } = await supabase
    .from('Foros')
    .insert([
        {
            title,
            content,
            id_user: userId
        }
    ])
    if (error) {
        console.error(error);
    }
    
    return data;

}