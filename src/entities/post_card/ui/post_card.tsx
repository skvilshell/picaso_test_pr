import { Link } from "react-router-dom"
import s from './post_card.module.css'
import { HTMLAttributes } from "react"
import clsx from "clsx"

interface PostCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "id" | "title"> {
   id: number,
   title: string
   body: string
}

export function PostCard({ id, title, body, className, ...props }: PostCardProps) {

   return (
      <Link
         to={`post/${id}`}
         className={s.root}
      >
         <article className={clsx(s.card, className)} {...props}>
            <h1 className={s.title}><span className={s.number}>#{id}</span> {title}</h1>
            <p className={s.body}>{body}</p>
         </article>
      </Link>
   )
}