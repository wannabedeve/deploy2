import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Home Impact',
          value: 'homeImpact',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: "Title One",
    },
    {
      name: 'richText1',
      type: 'richText',
      localized: true,
      admin: {
        condition: (_, { type } = {}) => ['homeImpact'].includes(type),
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: "Title Two",
    },
    {
      name: 'richText2',
      type: 'richText',
      localized: true,
      admin: {
        condition: (_, { type } = {}) => ['homeImpact'].includes(type),
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: "Title Three",
    },
    linkGroup({
      overrides: {
        // name: 'linkGroup',
        maxRows: 2,
        label: "Link Group One",
      },
    }),
    linkGroup({
      overrides: {
        name: 'linkGroup1',
        maxRows: 2,
        label: "Link Group Two",
        admin: {
          condition: (_, { type } = {}) => ['homeImpact'].includes(type),
        },
      },
    }),
    linkGroup({
      overrides: {
        name: 'linkGroup2',
        maxRows: 2,
        label: "Link Group Three",
        admin: {
          condition: (_, { type } = {}) => ['homeImpact'].includes(type),
        },
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact', 'homeImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
      label: "Image One",
    },
    {
      name: 'media1',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['homeImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
      label: "Image Two",
    },
    {
      name: 'media2',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['homeImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
      label: "Image Three",
    },
  ],
  label: false,
}
