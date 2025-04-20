// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import './style.scss'


// const FlexGallery = () => {
//   const [imagesLoaded, setImagesLoaded] = useState(false);

//   useEffect(() => {
//     const images = document.querySelectorAll('.flex-container img');
//     let loadedCount = 0;
//     images.forEach((img) => {
//       if (img.complete) {
//         loadedCount++;
//       } else {
//         img.onload = () => {
//           loadedCount++;
//           if (loadedCount === images.length) {
//             setImagesLoaded(true);
//           }
//         };
//       }
//     });
//     if (loadedCount === images.length) setImagesLoaded(true);
//   }, []);

//   return (
//     <div className="flex-container relative">
//       {!imagesLoaded && (
//         <div className="spinner absolute inset-0 flex justify-center items-center bg-white z-10">
//           <div className="flex flex-col items-center">
//             <div className="cube1 w-4 h-4 bg-gray-500 animate-spin"></div>
//             <div className="cube2 w-4 h-4 bg-gray-700 animate-spin"></div>
//             <p>Loading...</p>
//           </div>
//         </div>
//       )}
//       <div className="flex-slide home group">
//         <div className="flex-title group-hover:rotate-0 group-hover:top-[10%] transition-all">Home</div>
//         <div className="flex-about opacity-0 group-hover:opacity-100 transition-opacity">
//           <p>Click here to navigate to the home section of the website</p>
//         </div>
//       </div>
//       <div className="flex-slide about group">
//         <div className="flex-title group-hover:rotate-0 group-hover:top-[10%] transition-all">About</div>
//         <div className="flex-about opacity-0 group-hover:opacity-100 transition-opacity">
//           <p>Click here to navigate to the About section of the website</p>
//         </div>
//       </div>
//       <div className="flex-slide work group">
//         <div className="flex-title group-hover:rotate-0 group-hover:top-[10%] transition-all">Work</div>
//         <div className="flex-about opacity-0 group-hover:opacity-100 transition-opacity">
//           <p>Listing relevant snippets of work:</p>
//           <ul>
//             <li>First piece of work</li>
//             <li>Second piece of work</li>
//             <li>Third piece of work</li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex-slide contact group">
//         <div className="flex-title group-hover:rotate-0 group-hover:top-[10%] transition-all">Contact</div>
//         <div className="flex-about opacity-0 group-hover:opacity-100 transition-opacity">
//           <p>Use the contact form below</p>
//           <form className="contact-form">
//             <p>Email <input type="text" name="email" className="border p-1" /></p>
//             <p>Comment <textarea name="comment" rows={5} className="border p-1"></textarea></p>
//             <p><input type="submit" value="Send Message" className="bg-blue-500 text-white p-1 rounded" /></p>
//           </form>
//         </div>
//       </div>
//       {/* <a 
//         className="branding block mt-4" 
//         href="https://cameronfitzwilliam.com/" 
//         target="_blank"
//       >
//         <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M43.1942 32.8554C43.1942 32.781 43.1942 32.781 43.1942 32.8554C43.2686 32.781 43.2686 32.7066 43.2686 32.7066C43.2686 32.6322 43.343 32.6322 43.343 32.5578C44.6818 29.657 45.5 26.4587 45.5 23.0372C45.5 10.5413 35.3843 0.5 22.9628 0.5C10.5413 0.5 0.5 10.5413 0.5 22.9628C0.5 26.8306 1.46694 30.5496 3.25207 33.7479C3.25207 33.8223 3.32645 33.8967 3.40083 33.9711C7.19421 40.814 14.5579 45.5 22.9628 45.5C27.1281 45.5 31.0702 44.3843 34.4174 42.376C38.2107 40.0702 41.2603 36.7975 43.1942 32.8554Z" fill="#2F4858"/>
//         </svg>
//       </a> */}
//     </div>
//   );
// };

// export default FlexGallery;

















'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './style.scss';

const FlexGallery: React.FC = () => {
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
    <div className="flex-container relative">
      {!imagesLoaded && (
        <div className="spinner absolute inset-0 flex justify-center items-center bg-white z-10">
          <div className="flex flex-col items-center">
            <div className="cube1 w-4 h-4 bg-gray-500 animate-spin"></div>
            <div className="cube2 w-4 h-4 bg-gray-700 animate-spin"></div>
            <p>Loading...</p>
          </div>
        </div>
      )}
      <div className="flex-slide home group">
        <div className="flex-title group-hover:rotate-0 group-hover:top-[10%] transition-all">Home</div>
        <div className="flex-about opacity-0 group-hover:opacity-100 transition-opacity">
          <p>Click here to navigate to the home section of the website</p>
        </div>
      </div>
      <div className="flex-slide about group">
        <div className="flex-title group-hover:rotate-0 group-hover:top-[10%] transition-all">About</div>
        <div className="flex-about opacity-0 group-hover:opacity-100 transition-opacity">
          <p>Click here to navigate to the About section of the website</p>
        </div>
      </div>
      <div className="flex-slide work group">
        <div className="flex-title group-hover:rotate-0 group-hover:top-[10%] transition-all">Work</div>
        <div className="flex-about opacity-0 group-hover:opacity-100 transition-opacity">
          <p>Listing relevant snippets of work:</p>
          <ul>
            <li>First piece of work</li>
            <li>Second piece of work</li>
            <li>Third piece of work</li>
          </ul>
        </div>
      </div>
      <div className="flex-slide contact group">
        <div className="flex-title group-hover:rotate-0 group-hover:top-[10%] transition-all">Contact</div>
        <div className="flex-about opacity-0 group-hover:opacity-100 transition-opacity">
          <p>Use the contact form below</p>
          <form className="contact-form">
            <p>Email <input type="text" name="email" className="border p-1" /></p>
            <p>Comment <textarea name="comment" rows={5} className="border p-1"></textarea></p>
            <p><input type="submit" value="Send Message" className="bg-blue-500 text-white p-1 rounded" /></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FlexGallery;

