import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { TypedLocale } from 'payload'
import { getTranslations, setRequestLocale } from 'next-intl/server'
// import Heading from '@/components/components/ProjectsPage/Heading/Heading'
import RichText from '@/components/RichText'

export const revalidate = 600

type Args = {
  params: Promise<{
    locale: TypedLocale
  }>
}

export default async function Page({ params }: Args) {
  const { locale = 'en' } = await params
  const t = await getTranslations()
  const payload = await getPayload({ config: configPromise })

  const categories = await payload.find({
    collection: 'categories',
    locale,
    depth: 1,
    limit: 12,
    overrideAccess: false,
  })

  console.log(categories)
  //  let titles = categories.docs?.map((cat:any,idx)=> {
  //   cat[idx] ?  cat[idx].title : "No Title"
  //   return cat
  // });




  return (
    <div className='flex flex-col p-6'
    // className="pt-24 pb-24"
    >
      {/* <Heading /> */}
      <PageClient />

      <div className="container mb-16">

        <div className="prose dark:prose-invert max-w-none">
          {/* <h1>{t('posts')}</h1> */}
          <h1>Categories</h1>
          {categories.docs.map((doc) => (
            <li key={doc.id}>{doc.title}</li>
          ))}
          {/* <RichText
            className="lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[1fr]"
            content={titles}
            enableGutter={false}
          /> */}

        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="categories"
          currentPage={categories.page}
          limit={12}
          totalDocs={categories.totalDocs}
        />
      </div>

      {/* <CollectionArchive posts={categories.docs} /> */}

      <div className="container">
        {categories.totalPages > 1 && categories.page && (
          <Pagination page={categories.page} totalPages={categories.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `i-Stream Categories`,
  }
}
