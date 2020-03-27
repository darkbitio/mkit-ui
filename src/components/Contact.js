import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <div className='flex flex-col'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
            <div className='relative bg-gray-800'>
              <div className='h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
                <img
                  className='w-full h-full object-cover'
                  src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6875F5&sat=-100&blend-mode=multiply'
                  alt='Support team'
                />
              </div>
              <div className='relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='md:ml-auto md:w-1/2 md:pl-10'>
                  <div className='text-base leading-6 font-semibold uppercase tracking-wider text-gray-300'>
                    We’re here to help
                  </div>
                  <h2 className='mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10'>
                    What now?
                  </h2>
                  <p className='mt-3 text-lg leading-7 text-gray-300'>
                    The Managed Kubernetes Inspector Tool helps you spot common
                    vulnerabilities and configuration mistakes. If you want a
                    deeper look across your cloud-native infrastructure, our
                    team of experts can help. A Kickstart Call takes 30 minutes
                    or less to see if we're a good fit.
                  </p>
                  <div className='mt-8'>
                    <div className='inline-flex rounded-md shadow'>
                      <a
                        href='https://calendly.com/darkbit/kickstart-mkit'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <p className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'>
                          Schedule a brief kickstart
                          <svg
                            className='-mr-1 ml-3 h-5 w-5 text-gray-400'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path
                              fillRule='evenodd'
                              d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
