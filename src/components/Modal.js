import React from 'react'
import Resources from './Resources'
import Icon from './Icon'
import Badge from './Badge'
const ReactMarkdown = require('react-markdown')

class Modal extends React.Component {
  handleEscapeKey = event => {
    if (event.keyCode === 27) {
      this.props.handleClose()
    }
  }

  componentDidMount = () => {
    // listen for escape key
    document.addEventListener('keydown', this.handleEscapeKey, false)
  }

  componentWillUnmount = () => {
    // stop listening for escape key
    document.removeEventListener('keydown', this.handleEscapeKey, false)
  }

  renderFailedFields = finding => {
    console.log(JSON.stringify(finding.result))
    if (finding.result.status === 'failed') {
      return (
        <React.Fragment>
          <div className='sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 sm:py-5'>
            <dt className='text-sm leading-5 font-medium text-gray-700'>
              Severity
            </dt>
            <dd className='mt-1 text-sm leading-5 sm:mt-0 sm:col-span-3'>
              <Badge value={finding.severity} />
            </dd>
          </div>
          <div className='mt-8 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5'>
            <dt className='text-sm leading-5 font-medium text-gray-700'>
              Remediation Effort
            </dt>
            <dd className='mt-1 text-sm leading-5 sm:mt-0 sm:col-span-3'>
              <Badge value={finding.effort} />
            </dd>
          </div>
        </React.Fragment>
      )
    } else return null
  }

  render() {
    const { finding, resources } = this.props

    if (finding) {
      const refs = finding.references

      return (
        <div
          className='fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center'
          style={{ display: 'flex' }}>
          <div
            className='fixed inset-0 transition-opacity'
            onClick={this.props.handleClose}>
            <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          </div>

          <div className='modal-body bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-3xl sm:w-full'>
            <div className='bg-white shadow overflow-hidden  sm:rounded-lg'>
              <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
                <div className='flex content-start flex-wrap'>
                  <div className='flex-shrink-0 h-10 w-10'>
                    <Icon finding={finding} size={32} />
                  </div>
                  <div className='ml-4'>
                    <div className='text-gray-700'>
                      <h3 className='text-lg leading-6 font-medium text-gray-800'>
                        {finding.category}
                      </h3>
                      <p className='mt-1 max-w-2xl text-sm leading-5 text-gray-600'>
                        {finding.title}
                      </p>
                    </div>
                  </div>
                  <div className='ml-auto modal-close-button'>
                    <div
                      onClick={this.props.handleClose}
                      className='flex justify-end text-gray-500'>
                      <svg
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        width='24'
                        height='24'
                        className='modal-close'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-4 py-5 sm:p-0'>
                <dl>
                  {this.renderFailedFields(finding)}
                  <div className='mt-8 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5'>
                    <dt className='text-sm leading-5 font-medium text-gray-700'>
                      Description
                    </dt>
                    <dd className='mt-1 text-sm leading-5 text-gray-600 sm:mt-0 sm:col-span-3'>
                      <ReactMarkdown source={finding.description} />
                    </dd>
                  </div>
                  <div className='mt-8 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5'>
                    <dt className='text-sm leading-5 font-medium text-gray-700'>
                      Affected Resources
                    </dt>
                    <dd className='mt-1 text-sm leading-5 text-gray-600 sm:mt-0 sm:col-span-3'>
                      <Resources resources={finding.resources} />
                    </dd>
                  </div>
                  <div className='mt-8 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5'>
                    <dt className='text-sm leading-5 font-medium text-gray-700'>
                      Remediation
                    </dt>
                    <dd className='mt-1 text-sm leading-5 text-gray-600 sm:mt-0 sm:col-span-3'>
                      <ReactMarkdown source={finding.remediation} />
                    </dd>
                  </div>
                  <div className='mt-8 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5'>
                    <dt className='text-sm leading-5 font-medium text-gray-700'>
                      Validation
                    </dt>
                    <dd className='mt-1 text-sm leading-5 text-gray-600 sm:mt-0 sm:col-span-3'>
                      <ReactMarkdown source={finding.validation} />
                    </dd>
                  </div>
                  <div className='mt-8 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5'>
                    <dt className='text-sm leading-5 font-medium text-gray-700'>
                      References
                    </dt>
                    <dd className='mt-1 text-sm leading-5 text-gray-600 sm:mt-0 sm:col-span-3'>
                      <ul className='border border-gray-200 rounded-md'>
                        {refs &&
                          refs.map((reference, idx) => (
                            <li
                              key={idx}
                              className={`${
                                idx > 0 ? 'border-t border-gray-200' : ''
                              } pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5`}>
                              <div className='w-0 flex-1 flex items-center'>
                                <svg
                                  className='flex-shrink-0 h-5 w-5 text-indigo-500 hover:text-indigo-600'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'>
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                                  />
                                </svg>
                                <span className='ml-2 truncate'>
                                  <a
                                    href={reference.url}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    {reference.ref}
                                  </a>
                                </span>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (resources && resources.length > 0) {
      return (
        <div
          className='fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center'
          style={{ display: 'flex' }}>
          <div
            className='fixed inset-0 transition-opacity'
            onClick={this.props.handleClose}>
            <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          </div>

          <div className='modal-body bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-3xl sm:w-full'>
            <div className='bg-white shadow overflow-hidden  sm:rounded-lg'>
              <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
                <div className='flex content-start flex-wrap'>
                  <div className='flex-shrink-0 bg-indigo-500 rounded-md p-3'>
                    <svg
                      className='h-6 w-6 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                      />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <div className='text-gray-700'>
                      <h3 className='text-lg leading-6 font-medium text-gray-800'>
                        Affected Resources
                      </h3>
                      <p className='mt-1 max-w-2xl text-sm leading-5 text-gray-600'>
                        Resources discovered by all check results
                      </p>
                    </div>
                  </div>
                  <div className='ml-auto modal-close-button'>
                    <div
                      onClick={this.props.handleClose}
                      className='flex justify-end text-gray-500'>
                      <svg
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        width='24'
                        height='24'
                        className='modal-close'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-4 py-5 sm:p-0'>
                <dl>
                  <div className='mt-8 sm:mt-0 sm:grid sm:grid-cols-5 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5'>
                    <dt className='text-sm leading-5 font-medium text-gray-700'>
                      Resources
                    </dt>
                    <dd className='mt-1 text-sm leading-5 text-gray-600 sm:mt-0 sm:col-span-4'>
                      <Resources resources={resources} />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return null
  }
}

export default Modal
