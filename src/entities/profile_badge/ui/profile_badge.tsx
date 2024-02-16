import clsx from "clsx";
import { forwardRef } from "react";
import s from './profile_badge.module.css'
import { useGetUserByIdQuery, CircleAvatar, Loading } from "@/shared";

interface ProfileBadgeProps {
   id: number
   className?: string
}

export const ProfileBadge = forwardRef<HTMLDivElement, ProfileBadgeProps>(({ id, className }, ref) => {

   const { data, isLoading, isSuccess } = useGetUserByIdQuery(id)

   const username_words = data?.name.split(' ')


   if (isLoading) return (
      <div
         className={clsx(s.root, className)}
         ref={ref}
      >
         <Loading />
      </div>
   )


   if (isSuccess) {
      return (
         <div
            className={clsx(s.root, className)}
            ref={ref}
         >
            <CircleAvatar
               fallback={data.name}
               size={"md"}
            />
            <div className={s.username}>
               {
                  username_words?.map((word,index) => (
                     <span key={index}>{word}</span>
                  ))
               }
            </div>
         </div>
      )
   }
})
ProfileBadge.displayName = 'ProfileBadge'

