import { createFileRoute, Link } from '@tanstack/react-router'
import { Section } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Category } from '@/components/category/category';

import './introArticles.css';

export const Route = createFileRoute('/articles/introArticles')({
  component: introArticleRouteComponent,
})

function introArticleRouteComponent() {
  return (<div className="min-h-screen flex flex-col">

    <Category></Category>

    <section className='flex-grow flex flex-col justify-center items-center bg-white text-gray-800 p-4 md:p-8'>
        <div className='text-center max-w-3xl space-y-4 md:space-y-8'>
            <h1 className='text-3xl md:text-4xl font-normal mb-4 text-[#0aaccb]'>Articulos</h1>
            <p className='text-md md:text-lg text-gray-800 mb-32'>
                En esta sección encontrarás una serie de artículos relacionados con la escasez del agua, calidad del agua,
                turismo del agua, pueblos indígenas y la conservación en el estado Bolívar.
            </p>
            
            <Button asChild className='hover:bg-[#087b9b] text-md md:text-lg'>
              
              <Link to={'/articles/category'}>Ver artículos</Link>
              
            </Button>


        </div>
    </section>

  </div>);
}
