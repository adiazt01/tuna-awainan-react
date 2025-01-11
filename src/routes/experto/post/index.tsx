import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/experto/post/')({
  component: ExpertComponent,
})

function ExpertComponent() {
  return (<>
  <div>
      <h2>Foros publicados:
      </h2>
      <h1 className='text-5xl font-bold text-center -mt-4'>
          Hablando con expertos
      </h1>

  </div>
  <footer className='bg-white h-10p border-1 p-5 text-xs text-bold'>

    Tuna awainan no se hace responsable por la información que suban los usuarios a esta página.

  </footer>
  </>
)
}
