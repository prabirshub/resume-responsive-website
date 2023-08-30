import Link from 'next/link'
// import data
import { social } from '@/constants'

const Social = () => {
  return (
    <div className='flex justify-between max-w-[250px] gap-10 mb-[35px]'>
      {social.map((item, index) => {
        const { icon, href } = item
        return (
          <Link
            className='text-3xl hover:text-accent transition-all duration-300'
            key={index}
            href={href}
          >
            {icon}
          </Link>
        )
      })}
    </div>
  )
}
export default Social
