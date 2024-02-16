import clsx from 'clsx';
import { ImgHTMLAttributes } from "react";
import { VariantProps, cva } from 'class-variance-authority';
import s from './circle_avatar.module.css'

interface CircleAvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "children"> {
   fallback?: string
}  

const ButtonVariantProps = cva('',
   {
      variants: {
         size: {
            sm: s.sm_size,
            md: s.md_size,
            lg: s.lg_size
         },
      },
      defaultVariants: {
         size: 'md'
      }
   }
)

export function CircleAvatar({
   src,
   fallback,
   className,
   alt,
   size,
   ...props
}: CircleAvatarProps & VariantProps<typeof ButtonVariantProps>) {

   if (src) {
      return (
         <img
            src={src}
            alt={alt}
            // общие, размер, пререопределяемые
            className={clsx(s.root, ButtonVariantProps({ size, className }))}
            {...props}
         />
      )
   }

   // TODO: Показывать, пока картинка грузиться
   return (
      <div
         className={clsx(s.root, s.fallback, ButtonVariantProps({ size, className }))}
      >
         {fallback ? fallback[0] : null}
      </div>
   )

}