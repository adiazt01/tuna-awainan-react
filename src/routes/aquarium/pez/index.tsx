import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aquarium/pez/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/aquarium/pez/"!</div>
}
