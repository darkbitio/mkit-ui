import React from 'react'

class Empty extends React.Component {
  render() {
    return (
      <div className='bg-gray-50 rounded-lg shadow px-5 py-6 sm:px-6'>
        <div className='py-12 overflow-hidden md:py-20 lg:py-24'>
          <div className='relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
            <svg
              className='absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2'
              width='404'
              height='404'
              fill='none'
              viewBox='0 0 404 404'
            >
              <defs>
                <pattern
                  id='svg-pattern-squares-1'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x='0'
                    y='0'
                    width='4'
                    height='4'
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width='404'
                height='404'
                fill='url(#svg-pattern-squares-1)'
              />
            </svg>

            <div className='relative'>
              <blockquote className='mt-8'>
                <div className='max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-800'>
                  <p>No findings found.</p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Empty
