import { PostList } from "@/widgets";
import s from './main-page.module.css'

export function MainPage() {

   return (
      <div className={s.root} >
         <div className={s.container}>
            <PostList />
         </div>
      </div>
   )
}