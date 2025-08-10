import { createFileRoute } from '@tanstack/react-router'
import { OtherWorks } from '../components/OtherWorks/OtherWorks'

export const Route = createFileRoute('/other-works')({
  component: OtherWorks,
})