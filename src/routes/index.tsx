import { createFileRoute } from '@tanstack/react-router'
import { Auth } from '@supabase/auth-ui-react'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return <div>
    </div>
}