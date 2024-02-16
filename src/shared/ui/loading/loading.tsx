import clsx from 'clsx'
import s from './loading.module.css'

export function Loading({ className }: { className?: string }) {
   return (
      <div className={clsx(s.loader, className)}></div>
   )
}