import { supabase } from '@/lib/supabase'

export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })

  if (error) {
    throw error
  }

  return data
}

export const register = async (email: string, password: string, username: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username
      }
    }
  })

  if (error) {
    throw error
  }

  return data
}

export const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw error
  }
}

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession()
  if (error) {
    throw error
  
  }

  return data.session;
}

export const getProfileId = async (id) => {
  const { data, error } = await supabase
  .from('profiles')
  .select('profile_id')
  .eq('id', id)
  .single();

  if (error) {
    throw error
  }
  
  return data.profile_id;

}