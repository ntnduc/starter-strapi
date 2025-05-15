import BlockManager from "@/components/strapi/BlockManager";
import { Headline } from "@/components/ui/headline";
import { strapiGetMetaData, strapiGetUrlFromSlug } from "@/lib/api/strapi";
import { getPageBySlugUseCase } from "@/use-cases/page";
import type { Metadata } from "next";

interface PageRootProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageRootProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlugUseCase(slug);

  return strapiGetMetaData(page.seo, strapiGetUrlFromSlug(page.slug));
}

export default async function Page({ params }: PageRootProps) {
  const { slug } = await params;
  const page = await getPageBySlugUseCase(slug);

  return (
    <section className="text-center">
      <Headline>{page.title}</Headline>

      <p>{page.seo.metaDescription}</p>
      {/* @ts-expect-error */}
      {page.dynamicContent && <BlockManager blocks={page.dynamicContent} />}
    </section>
  );
}
