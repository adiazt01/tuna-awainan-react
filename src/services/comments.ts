import { supabase } from "@/lib/supabase";

export const postComment = async (postId, content, userId, position) => {
    const { data, error } = await supabase
    .from("ComentsPost")
    .insert([{ id_post: postId, content, id_user: userId, longitud: position.lng, latitud: position.lat }]);
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

export const postforumComment = async (postId, content, userId, position) => {
  const { data, error } = await supabase
  .from("ComentariosForos")
  .insert([{ id_for: postId, content, user_id: userId, longitud: position.lng, latitud: position.lat }]);
  if (error) {
      console.error(error);
  }
  return data;
}

export const fetchforumComments = async (postId) => {
  const { data, error } = await supabase
    .from("ComentariosForos")
    .select("*, profiles(username)")
    .eq("id_for", postId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};