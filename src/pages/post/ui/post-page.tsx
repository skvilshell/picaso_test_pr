import { useNavigate, useParams } from 'react-router-dom'
import s from './post-page.module.css'
import { Button, Loading, useGetPostByIdQuery } from '@/shared'
import { ProfileBadge } from '@/entities'

export function PostPage() {
   const { id } = useParams()
   const navigate = useNavigate()

   if (!id) {
      return
   }
   const { data, isLoading, isError, isSuccess } = useGetPostByIdQuery(id)


   if (isLoading) {
      return (
         <div
            className={s.root}
         >
            <Loading
               className={s.loading}
            />
         </div>
      )
   }

   if (isError) {
      return (
         <div
            className={s.root}
         >
            <h1>Ошибка</h1>
         </div>
      )
   }

   if (isSuccess)
      return (
         <section
            className={s.root}
         >
            <Button
               onClick={() => navigate('/',)}
            >← Назад</Button>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <ProfileBadge
               id={data.userId}
            />
         </section>
      )
}