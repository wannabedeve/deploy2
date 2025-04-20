import type { Post, WorkArchiveBlock as ArchiveBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { WorkCollectionArchive } from '@/components/WorkCollectionArchive'
import { TypedLocale } from 'payload'

export const WorkArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
    locale: TypedLocale
  }
> = async (props) => {
  const {
    id,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
    locale,
  } = props

  // const limit = limitFromProps || 3

  // const limit = (limitFromProps && limitFromProps > 1) ? limitFromProps : 10


  let posts: Post[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedPosts = await payload.find({
      collection: 'posts',
      depth: 1,
      locale,
      limit: 10,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
          where: {
            categories: {
              in: flattenedCategories,
            },
          },
        }
        : {}),
    })

    posts = fetchedPosts.docs


  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Post[]

      posts = filteredSelectedPosts
    }
  }

  // const getCategories = async () => {
  //   const payload = await getPayload({ config: configPromise })
  //   const fetchedCategories = await payload.find({
  //     collection: 'categories',
  //     depth: 1,
  //     locale,
  //     limit: 100,
  //   })
  //   const fecategories = fetchedCategories.docs
  // }
  // console.log(`facategories = ${fecategories}`)



  // const allCategories = categories?.map((category) => {
  //   if (typeof category === 'object') {
  //     const { id: categoryId, title } = category
  //     return {
  //       id: categoryId,
  //       title,
  //     }
  //   } else {
  //     return {
  //       id: category,
  //       title: 'Untitled category',
  //     }
  //   }
  // });


  const payload = await getPayload({ config: configPromise })

  const allCategories = await payload.find({
    collection: 'categories', // <-- the slug of your Categories collection
    depth: 0,                 // optional, controls how deep relations are populated
    limit: 100,               // optional, how many to fetch (default 10)
  });

  console.log(`allCategories.docs = ${allCategories.docs.map((category) => category.title)}`);
  let allz = allCategories.docs.map((category) => category.title)
  console.log(`allz = ${allz}`)


  return (


    <>

      <div className="my-16" id={`block-${id}`}>
        {introContent && (
          <div className="container mb-16">
            <RichText className="ml-0 max-w-[48rem]" content={introContent} enableGutter={false} />
          </div>
        )}
        <WorkCollectionArchive posts={posts} />
      </div>
    </>
  )
}
