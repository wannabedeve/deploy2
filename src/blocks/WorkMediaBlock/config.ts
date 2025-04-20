import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const WorkMediaBlock: Block = {
  slug: 'workMediaBlock',
  interfaceName: 'WorkMediaBlock',
  
  fields: [
    {
      name: 'images',
      type: 'array', // Allows multiple images inside the block
      fields: [
        // {
        //   name: 'image',
        //   type: 'upload',
        //   relationTo: 'media', // Ensure this points to your media collection
        //   required: true,
        // },
        {
           name: 'richText',
           type: 'richText',
           localized: true,
           editor: lexicalEditor({
             features: ({ rootFeatures }) => {
               return [
                 ...rootFeatures,
                 HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                 FixedToolbarFeature(),
                 InlineToolbarFeature(),
               ]
             },
           }),
           label: false,
         },
        {
          name: 'subImages',
          type: 'array', // Allows multiple images inside the block
          fields: [
            {
              name: 'subImage',
              type: 'upload',
              relationTo: 'media', // Ensure this points to your media collection
              required: true,
            },
          ],
        },
      ],
    },

  ],
}











    // fields: [
    //   {
    //     name: 'media',
    //     type: 'upload',
    //     relationTo: 'media',
    //     required: true,
    //   },
    // ],
    // labels: {
    //   plural: "Work Media Block",
    //   singular: "Work Media Block",
    // }
  
  
  
    // fields: [
    //   {
    //     name: 'content',
    //     type: 'blocks',
    //     blocks: [
    //       {
    //         slug: 'workArrMediaBlock', // Unique identifier for the block
    //         labels: {
    //           singular: 'Media Block',
    //           plural: 'Media Blocks',
    //         },
    //         fields: [
    //           {
    //             name: 'media',
    //             type: 'upload',
    //             relationTo: 'media', // Ensure 'media' collection exists
    //           },
    //           {
    //             name: 'caption',
    //             type: 'text',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  
  
    // fields: [
    //   {
    //     name: 'content',
    //     type: 'blocks',
    //     blocks: [
    //       {
    //         slug: 'workArrMediaBlock', // Unique identifier for the block
    //         labels: {
    //           singular: 'Media Block',
    //           plural: 'Media Blocks',
    //         },
    //         fields: [
    //           {
    //             name: 'subContent',
    //             type: 'blocks',
    //             blocks: [
    //               {
    //                 slug: 'workArrMediaBlock', //Unique identifier for the block
    //                 labels: {
    //                   singular: 'Sub Media Block',
    //                   plural: 'Sub Media Blocks',
    //                 },
    //                 fields: [
    //                   {
    //                     name: 'media',
    //                     type: 'upload',
    //                     relationTo: 'media', //Ensure 'media' collection exists
    //                   },
    //                   {
    //                     name: 'caption',
    //                     type: 'text',
    //                   },
    //                 ]
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
  
  
  
    //   }]
