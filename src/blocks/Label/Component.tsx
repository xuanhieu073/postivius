import React from 'react'
import type { PostivusLabelBlock as LabelProps } from '@/payload-types'
import { cn } from '@/utilities/ui'

export const PostivusLabelBlock: React.FC<LabelProps> = ({ labelText, style }) => {
  return (
    <div
      className={cn(
        'border px-2 items-center rounded font-medium text-2xl md:text-3xl inline-block',
        {
          'border-border bg-card': style === 'info',
          'border-error bg-error/30': style === 'error',
          'border-success bg-success rounded-lg': style === 'success',
          'border-warning bg-warning/30': style === 'warning',
        },
      )}
    >
      {labelText}
    </div>
  )
}
