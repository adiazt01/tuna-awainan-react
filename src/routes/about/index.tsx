import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import './about.css'

export const Route = createFileRoute('/about/')({
  component: AboutComponent,
})

function AboutComponent() {

  return (<div className='grid grid-cols-1 xl:grid-cols-2'>
    <div className='font-custom flex flex-col items-center justify-center h-screen'>
      <h1 className='text-5xl leading-tight text-center font-extrabold text-[#0cc0df]'>
        SOBRE TUNA <br />AWAINAN 
      </h1>
      <hr />
      <div className='font-semibold px-20' style={{ textAlign: 'justify' }}>
        &ensp; Nuestro objetivo es promover la 

        <span className='text-[#0cc0df]'>
        &ensp;cultura del agua
        </span>
        <span className='text-black'>
        &ensp;en el estado Bolívar, a fin de mejorar la calidad de vida de sus
          habitantes.
        </span>
        <span className='text-[#0cc0df]'>
        &ensp;Tuna awainan
        </span>
        <span className='text-black'>
        &ensp;es un término en pemón que significa
        </span>

        <span className='text-[#0cc0df]'>
        &ensp;agua clara
        </span>

        <span className='text-black'>
        &ensp;Los pemones
                son un pueblo muy cercano al agua. El estado Bolívar, hogar de
                al menos 30 mil pemones, es también uno de los territorios más
                ricos en agua dulce de toda Venezuela: pasan por este estado más
                de una decena de ríos, de los cuales destaca el Orinoco, el
                tercer Rio más caudaloso mundo. A pesar de esto, apenas un 21% de 
                los hogares del estado Bolívar cuenta con un buen servicio de agua
                en cantidad, calidad y frecuencia.
        </span>

      </div>
    </div>
    <img src="https://static.dw.com/image/65075042_906.jpg" alt="" className='h-full w-full object-cover'/>

  </div>);
}
