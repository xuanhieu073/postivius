import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { Media } from '@/components/Media'

const variantColors = {
  grey: 'bg-pvgrey text-black',
  green: 'bg-pvgreen text-black',
  dark: 'bg-pvdark text-white',
}

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-10">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            return (
              <div
                className={cn(
                  variantColors[col.colorVariant || 'grey'],
                  'flex gap-4 items-center border border-b-[6px] border-black rounded-[45px] p-12',
                  `col-span-4 lg:col-span-${colsSpanClasses[size!]}`,
                  {
                    'md:col-span-2': size !== 'full',
                  },
                )}
                key={index}
              >
                <div className="flex-[1_1_210px] flex flex-col justify-between items-start gap-y-4">
                  {richText && (
                    <RichText data={richText} enableGutter={false} className="text-inherit" />
                  )}
                  {enableLink && (
                    <div className="flex items-center gap-4">
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20.5" cy="20.5" r="20.5" fill="currentColor" />
                        <path
                          d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                          fill={col.colorVariant === 'dark' ? '#000' : '#B9FF66'}
                        />
                      </svg>
                      <CMSLink {...link} className="text-xl" />
                    </div>
                  )}
                </div>
                {col.illustration && typeof col.illustration === 'object' && (
                  <Media resource={col.illustration} className="flex-[0_1_210px]" />
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}
