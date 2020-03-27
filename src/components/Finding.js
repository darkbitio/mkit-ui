import React from 'react'
import Icon from './Icon'
import Badge from './Badge'

class Finding extends React.Component {
  renderFailColumns = () => {
    const { finding } = this.props
    const severity = finding.severity
    const effort = finding.effort

    return (
      <React.Fragment>
        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
          <Badge value={severity} />
        </td>
        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
          <Badge value={effort} />
        </td>
      </React.Fragment>
    )
  }

  render() {
    const { finding, open } = this.props
    const status = finding ? finding.result.status : 'failed'

    return (
      <tr
        onClick={open}
        className={status === 'failed' ? 'finding finding-fail' : 'finding'}
      >
        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
          <div className='flex items-center'>
            <div className='flex-shrink-0 h-10 w-10'>
              <Icon finding={finding} size={32} />
            </div>
            <div className='ml-4'>
              <div className='text-sm leading-5 font-medium text-gray-900'>
                {finding.title}
              </div>
              <div className='text-sm leading-5 text-gray-500'>
                {finding.category}
              </div>
            </div>
          </div>
        </td>
        {status && status === 'failed' && this.renderFailColumns()}
        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
          <div className='text-sm leading-5 text-gray-900'>
            {finding.platform}
          </div>
          <div className='text-sm leading-5 text-gray-500'>
            {finding.resource}
          </div>
        </td>
      </tr>
    )
  }
}

export default Finding
