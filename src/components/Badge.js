import React from 'react'

const SeverityMedium = 0.4
const SeverityHigh = 0.8

class Badge extends React.Component {
  render() {
    const { value } = this.props

    let color = 'bg-gray-100 text-gray-800'
    let text = 'Low'

    if (value >= SeverityMedium) {
      color = 'bg-yellow-100 text-yellow-800'
      text = 'Medium'
    }
    if (value >= SeverityHigh) {
      color = 'bg-red-100 text-red-800'
      text = 'High'
    }

    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 ${color}`}
      >
        {text}
      </span>
    )
  }
}

export default Badge
