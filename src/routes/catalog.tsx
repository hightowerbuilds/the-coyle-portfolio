import { createFileRoute } from '@tanstack/react-router'
import { Catalog } from '../components/Catalog/Catalog'

export const Route = createFileRoute('/catalog')({
  component: Catalog,
})