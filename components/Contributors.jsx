// import data
import { contributors } from '@/constants'
import Image from 'next/image'

const Contributors = () => {
  return (
    <section className='section' id='contributors'>
      <div className='container mx-auto'>
        <h2 className='section-title'>
          {contributors.title}
          <span className='dot'></span>
        </h2>
        <p className='section-subtitle'>{contributors.subtitle}</p>
        {/* contributors list */}
        <div className='flex flex-col gap-10 items-center lg:flex-row lg:gap-20 lg:flex-wrap lg:justify-center lg:px-[240px]'>
          {contributors.brands.map((item, index) => {
            const { image } = item
            return (
              <div className='max-w-[260px] h-24 flex items-center' key={index}>
                <Image src={image} alt='' />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Contributors
