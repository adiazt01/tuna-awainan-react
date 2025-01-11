import { createFileRoute } from '@tanstack/react-router'
import './category.css'
import { Category } from '@/components/category/category'
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/articles/category/')({
  component: ArticleRouteComponent,
})

function ArticleRouteComponent() {
  return (
    <><Category></Category>
    
        <section className='w-full px-24 sm:px-5  pt-8 grid grid-cols-1 mx-auto'>
            <div className='font-custom max-w-screen-xl mx-auto gap-8'>
                <section className="sticky top-0 z-10 w-full bg-white shadow-sm border-b border-gray-100">
                    <div className="flex flex-col gap-4">

                        <header>

                            <p className='text-base text-gray-700 dark:text-gray-400'>
                                Artículos encontrados de la categoría&nbsp;
                                <span>
                                    Escasez del agua
                                </span> 
                            </p>

                        </header>

                        <div className='container-article'>
                            <ul className='grid grid-cols-1 max-w-screen-xl gap-8'>
                                <li className='w-full'>
                                    <a href="" className='"grid grid-cols-1 border-x-lime-100 lg:grid-cols-2 w-full items-stretch bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>

                                    </a>
                                    <img src="" alt="" className='object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg'/>

                                    <div className='flex flex-col justify-between p-4 leading-normal'>

                                        <h5 className='mb-2 text-2xl text-pretty truncate font-bold tracking-tight text-gray-900 dark:text-white'>
                                            El shiba
                                        </h5>

                                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                                            El shiba es una raza de perro de origen japonés
                                        </p>
                                        <Button className='hover:bg-[#087b9b]'>
                                            Leer
                                        </Button>

                                    </div>

                                </li>
                            </ul>
                        </div>

                    </div>
                
                </section>
  
            </div>

        </section>
        
    </>

  );
}
