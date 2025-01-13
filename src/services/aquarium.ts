import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { List } from "postcss/lib/list";

export const Getletters = async () => {
    const {data,error} = await supabase.from('especimens').select('name')

    if(error){
        throw error
    }

    return data
}

export const Abecedario = () => {
    const {data, error, isLoading} = useQuery({queryKey: ['especimens'], queryFn: Getletters})

    if(error){
        throw error
    }
    //obtenemos todas las primeras letras 
    let letraRepetidas = data?.map((item) => item.name[0])

    return [...new Set(letraRepetidas)]
    
    

}