import { Articles } from '@/components/articles/articles'
import { Expert } from '@/components/expert/expert'
import { createFileRoute } from '@tanstack/react-router'
import { Map } from '@/components/map/mapposts'

export const Route = createFileRoute('/novedades/')({
  component: NovedadesComponent,
})

function NovedadesComponent() {
  return (
    <div>
      <Articles></Articles>
      <Expert></Expert>
    
    </div>
  )
}
