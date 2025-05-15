import { strapiGetMetaData, strapiGetUrlFromSlug } from '@/lib/api/strapi'
import { getPageBySlugUseCase } from '@/use-cases/page'
import type { Metadata } from 'next'

interface PageRootProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PageRootProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlugUseCase(slug)

  return strapiGetMetaData(page.seo, strapiGetUrlFromSlug(page.slug))
}

export default async function Page({ params }: PageRootProps) {
  console.log('💞💓💗💞💓💗 ~ Page ~ params:', params)
  // const { slug } = await params
  // const page = await getPageBySlugUseCase(slug);

  return <section className="text-center">132123</section>
}
