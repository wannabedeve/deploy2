'use client'
import type { StaticImageData } from 'next/image'

import React, { useEffect, useState } from 'react'
import RichText from '@/components/RichText'

import type { WorkMediaBlock as WorkMediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'
import { cn } from '@/utilities/cn'
import Image from 'next/image'
// import './styles.scss'
import './style.scss'

import clsx from 'clsx'
import Tabs from './tests2/Test2'
type Props = WorkMediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  images?: any
  disableInnerContainer?: boolean
}

export const WorkMediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    images,
    staticImage,
    disableInnerContainer,
  } = props
  console.log(images)



  // const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  // useEffect(() => {
  //   const images = document.querySelectorAll<HTMLImageElement>('.flex-container img');
  //   let loadedCount = 0;
  //   images.forEach((img) => {
  //     if (img.complete) {
  //       loadedCount++;
  //     } else {
  //       img.onload = () => {
  //         loadedCount++;
  //         if (loadedCount === images.length) {
  //           setImagesLoaded(true);
  //         }
  //       };
  //     }
  //   });
  //   if (loadedCount === images.length) setImagesLoaded(true);
  // }, []);



  // content?.map((item, idx) => {
  //   item.media
  // })

  // let caption
  // if (media && typeof media === 'object') caption = media.caption
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const fleetItems = [
    { className: "caddy-esv", title: "Cadillac Escalade ESV" },
    { className: "chevy", title: "CHEVROLET SUBURBAN" },
    { className: "s550", title: "MERCEDES-Benz S550" },
    { className: "sprinter", title: "MERCEDES SPRINTER VAN" },
    { className: "caddy-xts", title: "Cadillac XTS" },
    { className: "bmw740", title: "BMW 740LI" },
    { className: "ghost", title: "ROLLS-ROYCE GHOST" },
  ];

  let i = 0;


  const [containerActive, setContainerActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContainerActive(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (index: any) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
  };

  const handleClose = (e: any) => {
    e.stopPropagation();
    setActiveIndex(null);
  };


  console.log(`images ${images}`)

  const [activeTab, setActiveTab] = useState(0);

  return (






    // <div className="flex-container relative">
    //   {!imagesLoaded && (
    //     <div className="spinner absolute inset-0 flex justify-center items-center bg-white z-10">
    //       <div className="flex flex-col items-center">
    //         <div className="cube1 w-4 h-4 bg-gray-500 animate-spin"></div>
    //         <div className="cube2 w-4 h-4 bg-gray-700 animate-spin"></div>
    //         <p>Loading...</p>
    //       </div>
    //     </div>
    //   )}
    //   <div className="flex-slide home group">
    //     <div className="flex-title group-hover:rotate-0 group-hover:top-[10%] transition-all">Home</div>
    //     <div className="flex-about opacity-0 group-hover:opacity-100 transition-opacity">
    //       <p>Click here to navigate to the home section of the website</p>
    //     </div>
    //   </div>

    // </div> 





    //  <input type="radio" name="filter" id="all" className="hidden" checked></input>
    // <input type="radio" name="filter" id="forests" className="hidden"></input>
    // <input type="radio" name="filter" id="deserts" className="hidden"></input>
    // <input type="radio" name="filter" id="lakes" className="hidden"></input>

    // <div className="filter-wrapper">
    //   <label className="filter-item" htmlFor="all">All</label>
    //   <label className="filter-item" htmlFor="forests">Forests</label>
    //   <label className="filter-item" htmlFor="deserts">Deserts</label>
    //   <label className="filter-item" htmlFor="lakes">Lakes</label>
    // </div>

    // <div className="gallery-wrapper">
    //   <div className="gallery-item" data-tag="forest" style={{ backgroundImage: "url('http://caucasus-naturefund.org/wp-content/uploads/2012/11/800x400_lagodekhi.jpg')" }}>&nbsp;</div>
    //   <div className="gallery-item" data-tag="desert" style={{ backgroundImage: "url('http://69.195.124.72/~caucasu1/wp-content/uploads/2012/11/lagodekhi-APA1.jpg')" }}>&nbsp;</div>
    //   <div className="gallery-item" data-tag="lake" style={{ backgroundImage: "url('http://www.samrohn.com/wp-content/uploads/campuhan-river.jpg')" }}>&nbsp;</div>
    //   <div className="gallery-item" data-tag="forest" style={{ backgroundImage: "url('https://blog.virgin-atlantic.com/t5/image/serverpage/image-id/3616i3B87C94B15C8EADF?v=mpbl-1')" }}>&nbsp;</div>
    //   <div className="gallery-item" data-tag="forest" style={{ backgroundImage: "url('http://schedule.wttw.com/ulphoto/wttw_1341849338.jpg')" }}>&nbsp;</div>
    //   <div className="gallery-item" data-tag="desert" style={{ backgroundImage: "url('http://www.footootjes.nl/Panoramas_Netherlands/Panoramas/20080706_Kampina_sky_A_800x400SS_sh0.5-50.jpg')" }}>&nbsp;</div>
    //   <div className="gallery-item" data-tag="lake" style={{ backgroundImage: "url('http://schedule.wttw.com/ulphoto/wttw_1351524790.jpg')" }}>&nbsp;</div>
    //   <div className="gallery-item" data-tag="forest" style={{ backgroundImage: "url('http://nhcleanenergy.info/wp-content/themes/dynamix/lib/scripts/timthumb.php?src=wp-content/uploads/2011/07/riverleft.jpg&h=400&w=800&zc=0')" }}>&nbsp;</div>
    //   <div className="gallery-item" data-tag="lake" style={{ backgroundImage: "url('http://69.195.124.72/~caucasu1/wp-content/uploads/2012/10/flower-tusheti-APA.jpg')" }}>&nbsp;</div>
    // </div> 


    //    <h1>Flex-box: Align last row to grid</h1>

    // <div class="card-grid">
    //    <div class="card">
    //       <h2>I'm a card</h2>
    //       <p>Whoop Whoop!</p>
    //   </div>
    //   <div class="card">
    //       <h2>I'm a card</h2>
    //       <p>Whoop Whoop!</p>
    //   </div>
    //   <div class="card">
    //       <h2>I'm a card</h2>
    //       <p>Whoop Whoop!</p>
    //   </div>
    //   <div class="card">
    //       <h2>I'm a card</h2>
    //       <p>Whoop Whoop!</p>
    //   </div>
    //   <div class="card">
    //       <h2>I'm a card</h2>
    //       <p>Whoop Whoop!</p>
    //   </div>
    // </div> 





    //  <div className="containerior">
    //       <div className="cardo">
    //         <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg" />
    //         <div className="cardo__head">Plotting Cat</div>
    //       </div>
    //     </div> 


    // <div className=''>


    //   <div className={`
    //     cont ${containerActive ? "" : "s--inactive"} ${activeIndex !== null ? "s--el-active" : ""}`}>
    //     <div className="cont__inner">




    //       {images.map((img, index) => (

    //         <div
    //           key={index}
    //           className={`el ${activeIndex === index ? "s--active" : ""}`}
    //           onClick={() => handleClick(index)}
    //         >

    //           <div className="el__overflow">
    //             {/* {images.map((img, index) => ( */}
    //             <>
    //               <div className="el__inner">
    //                 <div
    //                   className="el__bg"
    //                   style={{ backgroundImage: `url(${img.image.url})` }}
    //                 ></div>
    //                 <div className="el__preview-cont">
    //                   <h2 className="el__heading">{"section"}</h2>
    //                 </div>
    //                 <div className="el__content">
    //                   <div className="el__text">Whatever</div>
    //                   {/* <Image
    //                       src={img.image.url}
    //                       alt={img.image.alt || 'Media Image'}
    //                       // layout="fill"
    //                       // objectFit="cover"
    //                       className="imges mb-[2%]"
    //                       width={300}
    //                       height={300}
    //                     // className={` card`}
    //                     /> */}



    //                   <section className="all-services">






    //                     {
    //                       img.subImages.map((sub, idx) => (
    //                         <div className="card" key={idx}>
    //                           <Image
    //                             src={sub.subImage.url}
    //                             alt={sub.subImage.alt || 'Media Image'}
    //                             // layout="fill"
    //                             // objectFit="cover"
    //                             className="imges mb-[2%] img"
    //                             width={300}
    //                             height={300}
    //                           // className={` card`}
    //                           />
    //                           <div className="date-block">
    //                             <h4>20<span>sept</span></h4>
    //                           </div>
    //                         </div>
    //                       ))
    //                     }
    //                     <div className="el__close-btn" onClick={handleClose}></div>

    //                   </section>
    //                 </div>

    //                 {/* w-1/${img.length + 1} p-5 h-auto */}
    //                 {/* {(img || staticImage) && (
    //               <Media
    //                 // imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
    //                 resource={img}
    //                 src={staticImage}
    //                 className='w-[300px] h-[300px]'
    //                 />
    //                 )} */}
    //               </div>
    //             </>
    //             {/* ))} */}

    //           </div>
    //           <div className="el__index">
    //             <div className="el__index-back">{index + 1}</div>
    //             <div className="el__index-front">
    //               <div className="el__index-overlay" data-index={index + 1}>{index + 1}</div>
    //             </div>
    //           </div>
    //         </div>

    //       ))}










    //     </div>
    //   </div>





    // </div>



    <Tabs images={images} />







    // <div className='container'>
    //   {images?.map((media, index) => {
    //     <div key={index}>

    //       {

    //         (media.image || staticImage) && (
    //           <Media
    //             imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
    //             resource={media.image}
    //             src={staticImage}
    //           />
    //         )
    //       }
    //     </div>
    //   })}
    // </div>



  )
}

// <>
//   {/* <div> */}
//   {/* <h1>{post.title}</h1> */}

//   {/* {images?.map((block, index) => {
//       switch (block.image) {
//         case 'workArrMediaBlock':
//           return (


//             <div key={index} className="media-block">
//               <div
//                 className={cn(
//                   '',
//                   {
//                     container: enableGutter,
//                   },
//                   className,
//                 )}
//               >
//                 {(block.image || staticImage) && (
//                   <Media
//                     imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
//                     resource={block.image as any}
//                     src={staticImage}
//                   />
//                 )}
//                 {block.caption && (
//                   <div
//                     className={cn(
//                       'mt-6',
//                       {
//                         container: !disableInnerContainer,
//                       },
//                       captionClassName,
//                     )}
//                   >
//                     <RichText content={block.caption as any} enableGutter={false} />
//                   </div>
//                 )}
//               </div>


//               {block.caption && <p>{block.caption}</p>}
//             </div>
//           );

//         default:
//           return null;
//       }
//     })}
//   </div> */}





//   {/* <div
//     className={cn(
//       '',
//       {
//         container: enableGutter,
//       },
//       className,
//     )}
//   >
//     {(media || staticImage) && (
//       <Media
//         imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
//         resource={media}
//         src={staticImage}
//       />
//     )}
//     {caption && (
//       <div
//         className={cn(
//           'mt-6',
//           {
//             container: !disableInnerContainer,
//           },
//           captionClassName,
//         )}
//       >
//         <RichText data={caption} enableGutter={false} />
//       </div>
//     )}
//   </div> */}
// </>























// <div className="flex-container relative flex flex-row justify-center">
// <div className=''>


//   <div className="flex-slide home group">
//     <div className="flex-title group-hover:rotate-0 group-hover:top-[10%] transition-all">Home</div>
//     <div className='flex-about opacity-0 group-hover:opacity-100 transition-opacity'>
//       {images.map((img, index) => (
//         <>
//           <div className="relative card-grid">

//             <Image
//               src={img.image.url}
//               alt={img.image.alt || 'Media Image'}
//               // layout="fill"
//               // objectFit="cover"
//               // className="rounded-lg"
//               width={300}
//               height={300}
//               className={` card`}
//             />
//             {/* w-1/${img.length + 1} p-5 h-auto */}
//             {/* {(img || staticImage) && (
//           <Media
//             // imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
//             resource={img}
//             src={staticImage}
//             className='w-[300px] h-[300px]'
//             />
//             )} */}
//           </div>
//         </>
//       ))}
//     </div>
//   </div>
// </div>

// </div>