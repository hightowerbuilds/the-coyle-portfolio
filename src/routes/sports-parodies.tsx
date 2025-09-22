import { createFileRoute } from '@tanstack/react-router'
import { SportsParodies } from '../components/SportsParodies/SportsParodies'

export const Route = createFileRoute('/sports-parodies')({
  component: SportsParodies,
})