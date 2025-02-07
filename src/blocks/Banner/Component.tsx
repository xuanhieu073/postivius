import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import React from 'react'
import { MinimalBanner } from './Minimal'
import { StandardBanner } from './Standard'

export type BannerProps = {
  className?: string
} & BannerBlockProps

const banners = {
  minimal: MinimalBanner,
  standard: StandardBanner,
}

export const BannerBlock: React.FC<BannerProps> = (props) => {
  const { type } = props || {}

  if (!type) return null

  const BannerToRender = banners[type]

  if (!BannerToRender) return null

  return <BannerToRender {...props} />
}
