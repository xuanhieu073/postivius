import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { BannerBlock as BannerBlockProps } from '@/payload-types'

export const StandardBanner: React.FC<BannerBlockProps> = ({
  title,
  content,
  link,
  style,
  media,
}) => {
  return (
    <div className="container">
      <div className=" bg-pvgrey rounded-2xl flex gap-14 p-14">
        <div className="w-3/5 flex flex-col items-start gap-y-6">
          <h3 className="text-3xl font-medium">{title}</h3>
          {content && <RichText data={content} enableGutter={false} enableProse={false} />}
          {link && <CMSLink {...link} />}
        </div>
        <div className="w-2/5 relative">
          {media && typeof media === 'object' && (
            <Media className="absolute top-1/2 -translate-y-1/2 left-0 right-0" resource={media} />
          )}
        </div>
      </div>
    </div>
  )
}
