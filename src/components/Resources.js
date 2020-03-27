import React from 'react'

class Resources extends React.Component {
  render() {
    const { resources } = this.props

    if (resources) {
      return (
        <div className='flex flex-col'>
          <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
            <div className='py-4 pl-2 align-middle inline-block min-w-full overflow-hidden sm:rounded-lg bg-gray-100'>
              <table className='min-w-full'>
                <tbody>
                  {resources.map((res, idx) => (
                    <tr className='' key={idx}>
                      <td
                        className={`px-2 py-0 whitespace-no-wrap text-sm leading-5 font-medium text-${
                          res.status === 'failed' ? 'red-500' : 'gray-900'
                        }`}
                      >
                        {res.status}
                      </td>
                      <td className='px-2 py-0 whitespace-no-wrap text-sm leading-5 text-gray-500'>
                        {res.resource}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    } else return null
  }
}

export default Resources
