import Image from 'next/image'

// import data
import { services } from '@/constants'

const Services = () => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <h2 className='section-title'>
          {services.title}
          <span className='dot'></span>
        </h2>
        <p className='section-subtitle'>{services.subtitle}</p>
        {/* services items */}
        <div className='flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:px-[136px]'>
          {services.skills.map((items, index) => {
            const { icon, name, description } = items
            return (
              <div
                className='p-[30px] w-full max-w-[417px] flex flex-col text-center lg:text-left hover:bg-white hover:shadow-2xl cursor-crosshair transition-all'
                key={index}
              >
                {/* icons */}
                <div className='w-20 h-20 mb-12 mx-auto lg:mx-0'>
                  <Image src={icon} alt={name} />
                </div>
                {/* services name */}
                <h3 className='text-2xl mb-3 font-semibold'>{name}</h3>
                {/* services descriptions */}
                <p className='text-grey text-lg lg:mb-16'>{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Services
