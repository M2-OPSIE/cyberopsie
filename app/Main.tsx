import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const actuPosts = posts.filter(
    (post) => post.tags && post.tags.map((t) => t.toLowerCase()).includes('actualite')
  )
  const outilsPosts = posts.filter(
    (post) => post.tags && post.tags.map((t) => t.toLowerCase()).includes('outils')
  )

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Master 2 OPSIE
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Bienvenue sur le site du Master 2 OPSIE. Ce site a pour but de regrouper les ressources,
            actualités et outils développés par les étudiants du Master.
            <br />
            <br />
            Page du master sur le site de l'université de Lyon 2{' '}
            <Link
              href="https://www.univ-lyon2.fr/master-2-informatique-organisation-et-protection-des-systemes-dinformation-dans-les-entreprises-opsie"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              ici
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 py-8 md:grid-cols-2">
          {/* Column 1: Actualités */}
          <div>
            <h2 className="mb-6 border-b border-gray-200 pb-2 text-2xl font-bold tracking-tight text-gray-900 dark:border-gray-700 dark:text-gray-100">
              Actualités
            </h2>
            {!actuPosts.length && <p className="text-gray-500">Aucune actualité pour le moment.</p>}
            <ul className="space-y-8">
              {actuPosts.slice(0, MAX_DISPLAY).map((post) => {
                const { slug, date, title, summary } = post
                return (
                  <li key={slug}>
                    <article className="space-y-2">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <h3 className="text-xl leading-8 font-bold tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="prose max-w-none text-sm text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Lire la suite &rarr;
                        </Link>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Column 2: Outils */}
          <div>
            <h2 className="mb-6 border-b border-gray-200 pb-2 text-2xl font-bold tracking-tight text-gray-900 dark:border-gray-700 dark:text-gray-100">
              Outils
            </h2>
            {!outilsPosts.length && <p className="text-gray-500">Aucun outil pour le moment.</p>}
            <ul className="space-y-8">
              {outilsPosts.slice(0, MAX_DISPLAY).map((post) => {
                const { slug, date, title, summary } = post
                return (
                  <li key={slug}>
                    <article className="space-y-2">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <h3 className="text-xl leading-8 font-bold tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="prose max-w-none text-sm text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Lire la suite &rarr;
                        </Link>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
