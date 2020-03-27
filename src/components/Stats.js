import React from 'react'
import Toggle from './Toggle'

class Stats extends React.Component {
  state = {}

  render() {
    const { findings } = this.props
    const totalResults = findings ? findings.length : 0
    const totalFailed = findings
      ? findings.filter(x => x.result.status === 'failed').length
      : 0
    const totalPassed = findings
      ? findings.filter(x => x.result.status === 'passed').length
      : 0

    const passPercent = findings
      ? ((totalPassed / totalResults) * 100).toFixed(1)
      : 0
    const failPercent = findings
      ? ((totalFailed / totalResults) * 100).toFixed(1)
      : 0

    const totalResources = findings
      ? findings.map(x => x.result.total).reduce((t, v) => t + v)
      : 0
    const passResources = findings
      ? findings.map(x => x.result.passed).reduce((t, v) => t + v)
      : 0
    const failResources = findings ? totalResources - passResources : 0

    return (
      <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='bg-white overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 bg-indigo-500 rounded-md p-3'>
                <svg
                  className='h-6 w-6 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm leading-5 font-medium text-gray-500 truncate'>
                    Failed Checks
                  </dt>
                  <dd className='flex items-baseline'>
                    <div className='text-2xl leading-8 font-semibold text-gray-900'>
                      {totalFailed}
                    </div>
                    <div className='ml-2 flex items-baseline text-sm leading-5 font-semibold text-red-600'>
                      <span className='sr-only'>Failed</span>
                      {failPercent}%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className='bg-gray-50 px-4 py-3 sm:px-6'>
            <span
              onClick={() => {
                this.props.handleToggle('failed')
              }}
            >
              <Toggle position={this.props.showFailed ? 'on' : 'off'} />
            </span>
          </div>
        </div>
        <div className='bg-white overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 bg-indigo-500 rounded-md p-3'>
                <svg
                  className='h-6 w-6 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm leading-5 font-medium text-gray-500 truncate'>
                    Passed Checks
                  </dt>
                  <dd className='flex items-baseline'>
                    <div className='text-2xl leading-8 font-semibold text-gray-900'>
                      {totalPassed}
                    </div>
                    <div className='ml-2 flex items-baseline text-sm leading-5 font-semibold text-green-600'>
                      <span className='sr-only'>Passed</span>
                      {passPercent}%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className='bg-gray-50 px-4 py-3 sm:px-6'>
            <span
              onClick={() => {
                this.props.handleToggle('passed')
              }}
            >
              <Toggle position={this.props.showPassed ? 'on' : 'off'} />
            </span>
          </div>
        </div>
        <div className='bg-white overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 bg-indigo-500 rounded-md p-3'>
                <svg
                  className='h-6 w-6 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm leading-5 font-medium text-gray-500 truncate'>
                    Affected Resources
                  </dt>
                  <dd className='flex items-baseline'>
                    <div className='text-2xl leading-8 font-semibold text-gray-900'>
                      {totalResources}
                    </div>
                    <div className='ml-2 flex items-baseline text-sm leading-5 font-semibold text-red-600'>
                      <span className='sr-only'>Failed</span>
                      {failResources}
                    </div>
                    <div className='ml-2'>
                      <span>/</span>
                    </div>
                    <div className='ml-2 flex items-baseline text-sm leading-5 font-semibold text-green-600'>
                      <span className='sr-only'>Passed</span>
                      {passResources}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className='bg-gray-50 px-4 py-4 sm:px-6'>
            <div className='text-sm leading-5'>
              <span
                onClick={this.props.open}
                className='font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150 all-resources-button'
              >
                View all
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stats
