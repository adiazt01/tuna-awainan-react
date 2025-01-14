import { createFileRoute, Link } from '@tanstack/react-router'
import { createClient } from '@supabase/supabase-js'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 font">
      <div className='flex flex-col gap-4 items-center justify-center h-screen bg-[#0cc0df]'>
        <h1 className='text-7xl leading-tight text-center text-white font-extrabold dark:text-white'>
            OTROS YA<br /> PUSIERON <br />
            SU GOTA<br />
            DE AGUA
        </h1>
        <h3 className='text-white text-4xl font-semibold'>Y tú, ¿qué esperas?</h3>
        <Button className='hover:bg-[#087b9b] text-md md:text-lg'> 
          <Link to={'/about'}>
            Saber más 
          </Link>
        </Button>
      </div>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frotoplas.com.ar%2Fwp-content%2Fuploads%2F2018%2F09%2Fhands-poor-poverty-9749.jpg&f=1&nofb=1&ipt=57a5d8899f4e21dd5b8d860305cee9d7fba40d9df70b323d061abc8818ac3ba4&ipo=images" alt="" 
        className='w-screen h-screen object-cover'/>
    </div>
  );
}