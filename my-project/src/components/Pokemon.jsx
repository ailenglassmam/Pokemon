import React from 'react'

export default function pokeInfo() {
  return (
    <section className='text-black body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <img alt='ecommerce' className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded' src='https://dummyimage.com/400x400' />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest'>N.º 0061</h2>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>Poliwhirl</h1>
            <div className='flex mb-4'>
              {/* calificación */}
              <span className='flex items-center'>
                <svg fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-4 h-4 text-red-500' viewBox='0 0 24 24'>
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                </svg>
                <svg fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-4 h-4 text-red-500' viewBox='0 0 24 24'>
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                </svg>
                <svg fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-4 h-4 text-red-500' viewBox='0 0 24 24'>
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                </svg>
                <svg fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-4 h-4 text-red-500' viewBox='0 0 24 24'>
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                </svg>
                <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-4 h-4 text-red-500' viewBox='0 0 24 24'>
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                </svg>
                <span className='text-gray-600 ml-3'>Popularidad</span>
              </span>
              {/* calificación */}
            </div>
            <p className='leading-relaxed'>Mirar fijamente la espiral de su vientre provoca somnolencia, por lo que puede usarse como alternativa a las nanas para dormir a los niños.</p>
            <div className='mt-8 grid grid-cols-2 gap-4'>
              <div className='grid grid-cols-1'>
                <span className='text-xl title-font font-medium text-black'>Altura</span>
                <span>1 metro</span>
              </div>
              <div className='grid grid-cols-1'>
                <span className='text-xl title-font font-medium text-black'>Peso</span>
                <span>20 kilos</span>
              </div>
              <div className='grid grid-cols-1'>
                  <span className='text-xl title-font font-medium text-black'>Tipo</span>
                  <span>Agua</span>
                </div>
                <div className='grid grid-cols-1'>
                  <span className='text-xl title-font font-medium text-black'>Categoría</span>
                  <span>Renacuajo</span>
                </div>
            </div>
            <div className='flex bg-black p-8 rounded-lg mt-8 text-center justify-center'>
              <ul className='grid grid-flow-col-dense gap-8'>
                <li className='grid gap-2'>
                  <span className='text-xl title-font font-medium text-white'>Habilidad</span>
                  <span className='bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded'>Humedad</span>
                  <span className='bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded'>Absorver agua</span>
                </li>
                <li className='grid gap-2'>
                  <span className='text-xl title-font font-medium text-white'>Debilidad</span>
                  <span className='bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded'>Plantas</span>
                  <span className='bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded'>Electricidad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
