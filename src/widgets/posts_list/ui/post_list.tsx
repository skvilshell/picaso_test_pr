import { Loading, useGetPostsQuery } from '@/shared'
import s from './post_list.module.css'
import { PostElement } from '@/features'
import { useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

export function PostList() {

   const { data, isLoading, isError, isSuccess } = useGetPostsQuery()

   const ScrollContainer = useRef<HTMLDivElement>(null)

   //* Виртуализация
   const rowVirtualizer = useVirtualizer({
      count: data ? data.length : 0,
      getScrollElement: () => ScrollContainer.current,
      //* Фиксированный размер в px
      estimateSize: () => 140,
      overscan: 2,
   })


   if (isLoading) {
      <div className={s.root}>
         <h1>
            <Loading />
         </h1>
      </div>
   }

   if (isError) {
      <div className={s.root}>
         <h1>
            Ошибка. Пожайлуйста, проверьте соеденеие или повторите позже
         </h1>
      </div>
   }

   if (isSuccess) {
      return (
         <div
            className={s.root}
            ref={ScrollContainer}
         >
            <div
               style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
               }}
               className={s.container}
            >

               {rowVirtualizer.getVirtualItems().map((virtualRow) => {

                  const post = data[virtualRow.index]

                  return (
                     <div
                        style={{
                           position: "absolute",
                           height: `${virtualRow.size}px`,
                           transform: `translateY(${virtualRow.start}px)`
                        }}
                     >
                        <PostElement
                           key={virtualRow.index}
                           id={post.id}
                           userId={post.userId}
                           body={post.body}
                           title={post.title}
                           className={s.post_element}
                        />
                     </div>
                  )
               })}
            </div>
         </div>
      )
   }

}