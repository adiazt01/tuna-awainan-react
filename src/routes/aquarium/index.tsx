import { ButtonLetter } from '@/components/aquarium/ButtonLetter'
import { LayoutAquarium } from '@/components/aquarium/LayoutAquarium'
import { supabase } from '@/lib/supabase'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aquarium/')({
  component: AquariumComponent,
})

function AquariumComponent() {

  return (
    <div>
        <LayoutAquarium></LayoutAquarium>
        <div className='mt-60 text-3xl text-center'>
                <h2 className="p-5">¿Ya viste el Acuario?</h2>  
                <p>&emsp;&emsp;"Un pedacito de Venezuela en tu salón. <br />
                    Descubre la increíble biodiversidad de la cuenca  <br />
                    del Orinoco a través de nuestro acuario. <br />
                    Cada pez cuenta una historia sobre la importancia de preservar <br />
                    nuestros ecosistemas. ¡Acompáñanos en este viaje educativo y <br />
                    contribuye a la conservación de esta joya natural!"</p>      

        </div>
    </div>

  )
}

import { Letter } from '@/components/aquarium/Letter'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Abecedario, Getletters } from '@/services/aquarium'
import { Key } from 'react'
import { LayoutEspecimen } from '@/components/aquarium/layout/LayoutEspecimen'

export const Route = createFileRoute('/aquarium/')({
  component: RouteComponent,
})

//obtenemos la lestras


function RouteComponent() {

    return (


    <section className="grid grid-cols 2">
      
      <LayoutEspecimen _letter={'#'}> 

        <div className=" m-10 text-3xl text-center px-[80px] py-[60px]">
          <h2 className="p-5 text-5xl text-[#0cc0df] font-sans">¿Ya viste el Acuario?</h2>  
          <p className="text-xl">&emsp;&emsp;"Un pedacito de Venezuela en tu salón. 
              Descubre la increíble biodiversidad de la cuenca 
              del Orinoco a través de nuestro acuario. 
              Cada pez cuenta una historia sobre la importancia de preservar 
              nuestros ecosistemas. ¡Acompáñanos en este viaje educativo y 
              contribuye a la conservación de esta joya natural!"</p>
        </div>
      </LayoutEspecimen>

      

    </section>


    )
}
  