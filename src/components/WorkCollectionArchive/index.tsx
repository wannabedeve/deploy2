'use client'
import { cn } from 'src/utilities/cn'
import React, { useEffect, useState } from 'react'

import type { Post } from '@/payload-types'
import { WorkCard } from '../WorkCard'
import './style.scss'


export type Props = {
  posts: Post[]
}

export const WorkCollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props



  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>('.flex-container img');
    let loadedCount = 0;
    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setImagesLoaded(true);
          }
        };
      }
    });
    if (loadedCount === images.length) setImagesLoaded(true);
  }, []);

  return (
    <>



      <div className="flex-container relative">

        {/* <p>Click here to navigate to the home section of the website</p> */}
        {posts?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <div className="flex-slide home group">
                <div className="flex-title group-hover:rotate-0 group-hover:top-[10%] transition-all">Home</div>
                <div className="flex-about opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="col-span-4" key={index}>
                    <WorkCard className="h-full" doc={result} relationTo="posts" showCategories />
                  </div>
                </div>
              </div>

            )
          }

          return null
        })}
      </div>



      <div className={cn('container')}>
        <div>
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
            {posts?.map((result, index) => {
              if (typeof result === 'object' && result !== null) {
                return (
                  <div className="col-span-4" key={index}>
                    <WorkCard className="h-full" doc={result} relationTo="posts" showCategories />
                  </div>
                )
              }

              return null
            })}
          </div>
        </div>
      </div>
    </>
  )
}
