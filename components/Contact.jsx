// import img
import Image from 'next/image'

// import data
import { contact } from '@/constants'

// import components
import Social from './Social'

const Contact = () => {
  return (
    <section
      id='contact'
      className='section before:content-ornament before:flex before:justify-center lg:before:mb-[44px]'
    >
      <div className='container mx-auto'>
        <h2 className='section-title text-accent'>{contact.title}</h2>
        <p className='section-subtitle'>{contact.subtitle}</p>
        {/* logo */}
        <div className='max-w-[200px] lg:max-w-xs mx-auto mb-28'>
          <Image
            src={'/assets/img/logo.svg'}
            width={96}
            height={46}
            alt='company logo'
            className='w-full'
          />
        </div>
        {/* social */}
        <div className='flex justify-center'>
          <Social />
        </div>
      </div>
    </section>
  )
}
export default Contact
