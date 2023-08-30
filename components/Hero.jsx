// import components
import Social from './Social'
// image
import Image from 'next/image'
// '../assets/img/man_banner.png'

// import icons
import { RiFileDownloadFill } from 'react-icons/ri'

const Hero = () => {
  return (
    <section
      className='pt-[100px] bg-heroText bg-contain bg-no-repeat bg-center lg:bg-top'
      id='home'
    >
      <div className='container mx-auto xl:px-[100px]'>
        <div className='lg:flex text-center lg:text-left'>
          {/* Hero left side */}
          <div className='flex-1 lg:max-w-[558px] mt-12'>
            <h3 className='text-[18px] lg:text-xl font-semibold mb-2 lg:mb-[50px]'>
              Hola! I&apos;m
            </h3>
            <h2 className='text-[24px] lg:text-[32px] font-semibold text-accent mb-4 lg:mb-5'>
              Justin Vaccaro
            </h2>
            <h1 className='text-[60px] md:text-[80px] lg:text-[100px] leading-none font-semibold mb-6'>
              Creative <br />
              <span className='lg:pl-[70px]'>Designer</span>
              <span className='w-3 h-3 md:w-5 md:h-5 inline-block bg-accent rounded-full ml-2'></span>
            </h1>
            <p className='mb-[35px] text-lg lg:text-xl text-center lg:text-left'>
              Since creative designers often interact with creative teams,
              managers, and clients, they need strong communication skills.
            </p>
            {/* socials */}
            <div className='mx-auto max-w-min lg:m-0 relative z-10'>
              <Social />
            </div>
            <button className='btn bg-accent mx-auto lg:mx-0 mb-6 shadow-xl shadow-[#fd59566b] relative z-10'>
              Download my CV
              <span className='text-xl ml-3'>
                <RiFileDownloadFill />
              </span>
            </button>
          </div>
          {/* Hero right side */}
          <div className='flex-1 flex justify-center lg:justify-end relative xl:after:content-arrow xl:after:w-96 xl:after:h-96 xl:after:block xl:after:absolute xl:after:top-2/4 xl:after:-left-96'>
            <Image
              className='z-20'
              src={'/assets/img/man_banner.png'}
              alt='banner img'
              width={580}
              height={700}
            />
            <div className='w-[350px] h-[400px] sm:w-[553px] sm:h-[753px] bg-blob bg-contain bg-no-repeat mx-auto absolute top-[85px] z-10'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
