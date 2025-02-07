'use client'
import RichText from '@/components/RichText'
import { Accordion as AccordionProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { useState } from 'react'

export const AccordionBlock: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="container flex flex-col gap-7">
      {items?.map((item, i) => (
        <AccordionItem key={i} title={item.title} text={item.text} index={i} />
      ))}
    </div>
  )
}

type AccordionItems = Extract<AccordionProps['items'], object>
export const AccordionItem = ({
  title,
  text,
  index,
}: AccordionItems[number] & { index: number }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div
      className={cn(
        'rounded-[45px] border border-black border-b-[6px] px-14 py-10 transition-all',
        {
          'bg-pvgreen': isOpen,
          'bg-pvgrey': !isOpen,
        },
      )}
    >
      <div
        className={cn(
          'flex justify-between items-center cursor-pointer border-b border-transparent pb-0 transition-all',
          {
            ' border-black pb-7': isOpen,
          },
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-x-6">
          <p className="text-[60px] font-medium">{(index + 1).toString().padStart(2, '0')}</p>
          <h4 className="text-[30px] font-medium">{title}</h4>
        </div>
        <button className="relative flex-shrink-0 w-14 h-14 rounded-full border border-black">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[6px] bg-black"></div>
          <div
            className={cn(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-5 bg-black transition-all',
              {
                'h-0': isOpen,
              },
            )}
          ></div>
        </button>
      </div>
      {isOpen && (
        <div className="pt-7">{text && <RichText data={text} enableGutter={false} />}</div>
      )}
    </div>
  )
}
