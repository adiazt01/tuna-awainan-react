import { supabase } from "@/lib/supabase"


export const getPosts = async () => {
    const {data,error} = await supabase.from('posts').select('*')
    if(error){
        throw error
    }

    return data;
}

export const getPostbyId = async (id: number) => {
    const {data,error} = await supabase.from('posts').select('*').eq('id',id)
    if(error){
        throw error
    }

    return data;
}