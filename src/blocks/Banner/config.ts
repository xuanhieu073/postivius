import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { link } from '@/fields/link'

export const Banner: Block = {
  slug: 'banner',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'minimal',
      options: [
        { label: 'Minimal', value: 'minimal' },
        { label: 'Standard', value: 'standard' },
      ],
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'info',
      options: [
        { label: 'Info', value: 'info' },
        { label: 'Warning', value: 'warning' },
        { label: 'Error', value: 'error' },
        { label: 'Success', value: 'success' },
      ],
      required: true,
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: false,
      required: true,
    },
    link({
      overrides: {
        admin: {
          condition: (_, { type } = {}) => ['standard'].includes(type),
        },
      },
    }),
    {
      type: 'upload',
      name: 'media',
      relationTo: 'media',
      admin: {
        condition: (_, { type } = {}) => ['standard'].includes(type),
      },
    },
  ],
  interfaceName: 'BannerBlock',
}
