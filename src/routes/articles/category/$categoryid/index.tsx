import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/category/$categoryid/')({
  
    loader: ({ params }) => fetchArticle(params.categoryid),
  
    component: ArticleComponent,
})

function ArticleComponent() {

    const { categoryid } = Route.useParams()

    return (
        <><Button>
            <Link to={'/articles/category'}>
                <i className="fa-solid fa-arrow-left"></i>
            </Link>
        </Button>
        
        <div className='max-w-4xl mx-auto p-6 bg-white rounded-xl mb-8'>
            <img src="" alt="" className='w-full h-64 object-cover rounded-lg mb-6'/>

            <h2 className='text-3xl font-bold mb-4'>

            </h2>

            <p className='text-gray-700 leading-relaxed'>

            </p>
        </div>

        <div className='max-w-4xl mx-auto p-6'></div>

        <section className='bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased'>
            <div className='max-w-2xl mx-auto px-4'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='negro text-lg lg:text-2xl font-bold text-gray-900 dark:text-white'>Comentarios</h2>
                </div>

                <form className='mb-6 flex flex-col' method='POST'>
                    <div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
                        <label htmlFor="comment" className='sr-only'></label>
                        <textarea name="content" id="comment" rows={6}
                        className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
                        placeholder="Escribe tu comentario" required></textarea>

                    </div>

                    <button type='submit'
                    className='inline-flex items-center bg-[#0cc0df] ml-auto py-2.5 px-4 text-xs font-medium text-center text-white bg-[p] rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-primary-900 hover:bg-primary-800'>
                        Envíar
                    </button>

                </form>

                <article className='p-6 text-base bg-white rounded-lg dark:bg-gray-900'>
                    <footer className='flex justify-between items-center mb-2'>
                        <div className='flex items-center'>
                            <div className='relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                                <span className='font-medium text-gray-600 dark:text-gray-300'>

                                </span>
                            </div>
                            <div className='ml-2'>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">

                                </h3>
                            </div>
                        </div>
                    </footer>
                    <p className='text-gray-500 ml-2 dark:text-gray-400'>

                    </p>

                    <div className='my-4 border-b border-gray-200 dark:border-gray-700'>

                    </div>
                </article>

            </div>
        </section>
        
        </>
    );
}


function fetchArticle(categoryid: string) {
    throw new Error('Function not implemented.')
}

