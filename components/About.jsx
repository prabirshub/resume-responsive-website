// import data
import { about } from '@/constants'

// import images
import Image from 'next/image'

const About = () => {
  return (
    <section
      id='about'
      className='section relative lg:before:content-pattern lg:before:absolute lg:before:top-[332px] lg:before:left-[180px] lg:after:content-rope lg:after:absolute lg:after:overflow-hidden lg:after:left-0 lg:after:right-0 lg:after:top-1/2 lg:after:flex lg:after:justify-center lg:after:items-center'
    >
      <div className='container mx-auto'>
        <h2 className='section-title'>
          {about.title}
          <span className='dot'></span>
        </h2>
        <p className='section-subtitle lg:mb-[60px]'>{about.subtitle}</p>
        {/* image */}
        <div>
          {/* circle */}
          <div className='absolute w-32 h-32 bg-accent rounded-full left-[38%] top-[42%] md:left-[50%] md:top-[35%] z-30 mix-blend-hue blur-[30px]'></div>
          <Image
            className='mx-auto z-20 relative'
            src={'/assets/img/man_about.png'}
            alt='walking in the street'
            width={500}
            height={650}
          />
        </div>
      </div>
    </section>
  )
}
export default About
