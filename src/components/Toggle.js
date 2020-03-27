import React from 'react'

class Toggle extends React.Component {
  render() {
    const containerClasses = [
      'relative',
      'inline-block',
      'flex-shrink-0',
      'h-6',
      'w-11',
      'border-2',
      'border-transparent',
      'rounded-full',
      'cursor-pointer',
      'transition-colors',
      'ease-in-out',
      'duration-200',
      'focus:outline-none',
      'focus:shadow-outline',
    ]
    const handledClasses = [
      'inline-block',
      'h-5',
      'w-5',
      'rounded-full',
      'bg-white',
      'shadow',
      'transform',
      'transition',
      'ease-in-out',
      'duration-200',
    ]

    if (this.props.position === 'on') {
      containerClasses.push('bg-indigo-500')
      handledClasses.push('translate-x-0')
    } else {
      containerClasses.push('bg-gray-200')
      handledClasses.push('translate-x-5')
    }

    return (
      <span
        className={containerClasses.join(' ')}
        role='checkbox'
        aria-checked={this.props.position === 'on'}
        tabIndex='0'
      >
        <span aria-hidden='true' className={handledClasses.join(' ')}></span>
      </span>
    )
  }
}

export default Toggle
