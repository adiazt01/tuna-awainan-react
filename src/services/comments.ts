import { supabase } from "@/lib/supabase";

export const postComment = async (postId, content, userId) => {
    const { data, error } = await supabase
    .from("ComentsPost")
    .insert([{ id_post: postId, content, id_user: userId }]);
    if (error) {
        console.error(error);
    }
    return data;
}

export const fetchComments = async (postId) => {
    const { data, error } = await supabase
      .from("ComentsPost")
      .select("*, profiles(username)")
      .eq("id_post", postId);
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data;
};