import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { CardsEspecimens } from '@/components/aquarium/CardsEspecimen'
import { EspecimenPage } from '@/components/aquarium/EspecimenPage'


export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

const moksPeces = [
  {
      id: '1',
      name: 'pez sierra',
      namePsientific: 'pez sierra 1',
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fes%2Fs%2Ffotos%2Fpez-bonito&psig=AOvVaw2sYIe1RN2AW4AYX3s0xb-a&ust=1736653123133000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjagZrf7IoDFQAAAAAdAAAAABAK',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus architecto inventore quas repellendus reiciendis tempore laboriosam? Ipsum nesciunt maxime, dignissimos quo ea labore repellendus laudantium incidunt vitae nihil nam.'
  }
  
]

function RouteComponent() {

  return <div>
    <EspecimenPage especimen={moksPeces[0]}/>

  </div>
}
