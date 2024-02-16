import clsx from 'clsx'
import s from './post_element.module.css'
import { PostDto } from '@/shared'
import { HTMLAttributes, forwardRef } from 'react'
import { PostCard, ProfileBadge } from '@/entities'

interface PostElementProps extends PostDto, Omit<HTMLAttributes<HTMLDivElement>, "id" | "title"> { }

export const PostElement = forwardRef<HTMLDivElement, PostElementProps>(({
   id,
   title,
   userId,
   body,
   className,
   ...props
}, ref) => {



   return (
      <div
         className={clsx(s.root, className)}
         {...props}
         ref={ref}
      >
         <PostCard
            id={id}
            title={title}
            body={body}
         />
         <ProfileBadge
            className={s.badge}
            id={userId}
         />
      </div>
   )

})