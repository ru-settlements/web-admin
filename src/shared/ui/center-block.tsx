import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

import { cn } from '@/shared/lib/utils.ts'

const centerBlockVariants = cva(
  'bg-black rounded-none md:rounded-2xl w-full md:w-1/3 h-auto max-h-[40vh] overflow-y-auto flex flex-col p-6'
)

export const CenterBlock = ({
  className,
  children,
  ...props
}: ComponentProps<'div'> & VariantProps<typeof centerBlockVariants>) => {
  return (
    <div className={cn(centerBlockVariants({ className }))} {...props}>
      {children}
    </div>
  )
}
