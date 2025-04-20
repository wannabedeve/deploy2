'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import './style.scss'

export const HomeImpactHero: React.FC<Page['hero']> = (
  { links,
    linkGroup1,
    linkGroup2,
    media,
    media1,
    media2,
    richText1,
    richText2,
    richText
  }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })
  // console.log(extractUrl(media as any))

  // let mediaSrc = extractUrl(media as any)
  // let media1Src = extractUrl(media1 as any)
  // let media2Src = extractUrl(media2 as any)


  function getMediaUrl(media, baseUrl = "") {
    if (!media || !media.url) return null;
    return `${baseUrl}${media.url}`;
  }

  // // Example usage:


  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL; // Replace with your actual Payload CMS URL

  let mediasrc = getMediaUrl(media, BASE_URL);
  let media1src = getMediaUrl(media1, BASE_URL);
  let media2src = getMediaUrl(media2, BASE_URL);


  // console.log(getMediaUrl( getMediaUrl(media))); 
  // // Output: "https://yourdomain.com/api/media/file/iStream.png"

  return (

    <>

      <div className='-mt-[15%] mb-[100%]'>


        <div className="untitled">
          <div className="untitled__slides">
            <div className="untitled__slide">
              <div className={`untitled__slideBg`}
                style={{ backgroundImage: `url(${mediasrc})` }}
              >

                <div className="absolute inset-0 bg-black opacity-55"></div>
              </div>
              <div className="untitled__slideContent">
                {/* <span>London</span>
                <span>Scout</span> */}

                {richText && <RichText className="mb-6" content={richText} enableGutter={false} />}

                {/* <a className="button" href="https://unsplash.com/@scoutthecity" target="/black">Unsplash Profile</a> */}

                {Array.isArray(links) && links.length > 0 && (
                  <ul className="flex gap-4">
                    {links.map(({ link }, i) => {
                      return (
                        <li key={i} className='button bg-black'>
                          <CMSLink {...link} />
                        </li>
                      )
                    })}
                  </ul>
                )}

              </div>
            </div>
            <div className="untitled__slide">
              <div className="untitled__slideBg"
                style={{ backgroundImage: `url(${media1src})` }}

              >

                <div className="absolute inset-0 bg-black opacity-55"></div>

              </div>
              <div className="untitled__slideContent">

                {/* <span>Vladimir</span>
                <span>Kudinov</span> */}
                {richText1 && <RichText className="mb-6" content={richText1} enableGutter={false} />}

                {/* <a className="button" href="https://unsplash.com/@madbyte" target="/black">Unsplash Profile</a> */}

                {Array.isArray(linkGroup1) && linkGroup1.length > 0 && (
                  <ul className="flex gap-4">
                    {linkGroup1.map(({ link }, i) => {
                      return (
                        <li key={i} className='button'>
                          <CMSLink {...link} />
                        </li>
                      )
                    })}
                  </ul>
                )}

              </div>
            </div>
            <div className="untitled__slide">
              <div className="untitled__slideBg"
                style={{ backgroundImage: `url(${media2src})` }}

              >
                <div className="absolute inset-0 bg-black opacity-55"></div>

              </div>
              <div className="untitled__slideContent">
                {/* <span>Macio</span>
                <span>Amorim</span> */}
                {richText2 && <RichText className="mb-6" content={richText2} enableGutter={false} />}

                {/* <a className="button" href="https://unsplash.com/@maicoamorim" target="/black">Unsplash Profile</a> */}

                {Array.isArray(linkGroup2) && linkGroup2.length > 0 && (
                  <ul className="flex gap-4">
                    {linkGroup2.map(({ link }, i) => {
                      return (
                        <li key={i} className='button'>
                          <CMSLink {...link} />
                        </li>
                      )
                    })}
                  </ul>
                )}

              </div>
            </div>
            {/* <div className="untitled__slide">
              <div className="untitled__slideBg"></div>
              <div className="untitled__slideContent">
                <span>Mario</span>
                <span>Calvo</span>
                <a className="button" href="https://unsplash.com/@mariocalvo" target="/black">Unsplash Profile</a>
              </div>
            </div> */}
          </div>
          <div className="untitled__shutters"></div>
        </div>

      </div>










      {/* <div className="relative -mt-[10.4rem] flex items-end text-white" data-theme="dark">
        <div className="container mb-8 z-10 relative">
          <div className="max-w-[34rem]">
            {richText && <RichText className="mb-6" content={richText} enableGutter={false} />}
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex gap-4">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="min-h-[80vh] select-none">
          {media && typeof media === 'object' && (
            <React.Fragment>
              <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
              <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
            </React.Fragment>
          )}
        </div>
      </div> */}


    </>
  )
}




type Media = {
  url?: string | null;
  thumbnailURL?: string | null;
  [key: string]: any; // allow other fields like alt, caption
};

export function extractUrl(media: Media | null | undefined): string | null {
  if (!media) return null;

  return media.url ?? null;
}



// const extractMedia = (richTextObj: any): string => {
//   try {
//     return richTextObj?.root?.children?.[0]?.children?.[0]?.url || "";
//   } catch (error) {
//     console.error("Error extracting text:", error);
//     return "";
//   }
// };