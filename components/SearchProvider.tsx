'use client'

import { SearchProvider as PlinySearchProvider, SearchConfig } from 'pliny/search'
import { useRouter } from 'next/navigation'

export const SearchProvider = ({
  children,
  searchConfig,
}: {
  children: React.ReactNode
  searchConfig: SearchConfig
}) => {
  const router = useRouter()

  const defaultActions = [
    {
      id: 'homepage',
      name: 'Accueil',
      keywords: 'accueil home page',
      section: 'Navigation',
      perform: () => router.push('/'),
    },
    {
      id: 'blog',
      name: 'Blog',
      keywords: 'blog posts articles',
      section: 'Navigation',
      perform: () => router.push('/blog'),
    },
    {
      id: 'tags',
      name: 'Tags',
      keywords: 'tags sujets',
      section: 'Navigation',
      perform: () => router.push('/tags'),
    },
    {
      id: 'projects',
      name: 'Projets',
      keywords: 'projets projects',
      section: 'Navigation',
      perform: () => router.push('/projects'),
    },
    {
      id: 'about',
      name: 'À propos',
      keywords: 'about à propos nous',
      section: 'Navigation',
      perform: () => router.push('/about'),
    },
  ]

  if (searchConfig && searchConfig.provider === 'kbar') {
    const config = {
      ...searchConfig,
      kbarConfig: {
        ...searchConfig.kbarConfig,
        defaultActions,
      },
    }
    return <PlinySearchProvider searchConfig={config}>{children}</PlinySearchProvider>
  }

  return <PlinySearchProvider searchConfig={searchConfig}>{children}</PlinySearchProvider>
}
