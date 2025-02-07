import { Block } from 'payload'

export const PostivusLabel: Block = {
  slug: 'postivusLabel',
  interfaceName: 'postivusLabelBlock',
  fields: [
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
      type: 'text',
      name: 'labelText',
    },
  ],
}
