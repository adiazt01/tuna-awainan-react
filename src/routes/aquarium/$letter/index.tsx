import { LayoutEspecimen } from '@/components/aquarium/layout/LayoutEspecimen'
import { supabase } from '@/lib/supabase'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { type ListOfEspecimens } from '@/type.d'
import { CardsEspecimens } from '@/components/aquarium/CardsEspecimen'

export const Route = createFileRoute('/aquarium/$letter/')({
  loader: async ({ params }) => resultadosLetter(params.letter),
  component: ResultsEspecimens,
})//obtenemos la letra



const resultadosLetter  = async (letter: string) => {
  const {data,error} = await supabase.from('especimens').select('*').like('name',`${letter}%`)
  if(error){
    throw error
  }
  return data
}

interface Props {
  especimens: ListOfEspecimens
}

function ResultsEspecimens() {
  //obtenemos la letra
  const {letter} = Route.useParams()

  const {data, error, isLoading} = useQuery(
    {queryKey: ['especimens', letter], 
    queryFn: () => resultadosLetter(letter)
  }); 



  if(isLoading){
    return <div>Cargando...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }

  return <LayoutEspecimen _letter={letter}>

    <CardsEspecimens especimens={data} />
      
  </LayoutEspecimen> 
}



