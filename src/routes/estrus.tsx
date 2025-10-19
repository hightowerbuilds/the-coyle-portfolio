import { createFileRoute } from '@tanstack/react-router'
import { Estrus } from '../components/Estrus/Estrus'

export const Route = createFileRoute('/estrus')({
  component: Estrus,
})

