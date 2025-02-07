import RichText from '@/components/RichText'
import { BannerProps } from '../Component'
import { cn } from '@/utilities/ui'

export const MinimalBanner: React.FC<BannerProps> = ({ className, title, content, style }) => {
  return (
    <div
      className={cn(
        'mx-auto my-8 w-full flex flex-col md:flex-row items-center gap-x-10 gap-y-7 container',
        className,
      )}
    >
      {title && (
        <div
          className={cn(
            'border px-2 flex items-center rounded font-medium text-4xl text-center md:text-left flex-shrink-0',
            {
              'border-border bg-card': style === 'info',
              'border-error bg-error/30': style === 'error',
              'border-success bg-success rounded-lg': style === 'success',
              'border-warning bg-warning/30': style === 'warning',
            },
          )}
        >
          {title}
        </div>
      )}
      <div>
        <RichText
          className="text-center md:text-left"
          data={content}
          enableGutter={false}
          enableProse={false}
        />
      </div>
    </div>
  )
}
