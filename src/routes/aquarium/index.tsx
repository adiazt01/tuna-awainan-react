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
